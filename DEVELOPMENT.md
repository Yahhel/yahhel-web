# Developer notes — package installation & monorepo workflow

This repo is a **Turborepo monorepo** using **pnpm workspaces**. Read this before installing anything — pnpm here is strict about dependency isolation, and doing it wrong causes confusing "Cannot find module" errors at runtime instead of at install time.

## Structure

```
apps/*      -> deployable applications (e.g. apps/seller, apps/admin)
packages/*  -> shared code consumed by apps (e.g. packages/ui)
```

Each folder under `apps/` and `packages/` is its **own workspace package**, with its own `package.json` and its own dependency list.

## The one rule that matters

> **If a file directly `import`s a package, that package must be listed in the `package.json` of the workspace the file lives in.**

pnpm does **not** hoist/share dependencies across workspace packages automatically. Installing something in `apps/seller` does **not** make it available in `packages/ui`, and vice versa — even though they're in the same repo. This is intentional (prevents "phantom dependency" bugs), but it means every app/package must declare what it actually uses.

## How to install a package

**Ask first: does only ONE app/package use this, or will multiple use it?**

### Case A — used by a single app/package only
Install directly into that workspace using `--filter`:

```bash
pnpm add some-package --filter seller
pnpm add some-package --filter @repo/ui
```

Never run a bare `pnpm add some-package` from the root — pnpm will block it (`ERR_PNPM_ADDING_TO_ROOT`) because that's almost never what you want. Root installs are reserved for repo-wide tooling only (see below).

### Case B — used by multiple apps (e.g. both `seller` and `admin`)
Use the **pnpm catalog** so every app stays locked to the exact same version.

1. Add it to `pnpm-workspace.yaml` at the repo root:
   ```yaml
   catalog:
     react-hook-form: ^7.88.0
     zod: "^4.6.2"
     "@hookform/resolvers": "^5.9.1"
   ```
   Note: any catalog key starting with `@` must be quoted (YAML syntax rule).

2. Install it into each app that needs it:
   ```bash
   pnpm add react-hook-form --filter seller
   pnpm add react-hook-form --filter admin
   ```

3. In each app's `package.json`, replace the version pnpm wrote with `"catalog:"`:
   ```json
   "dependencies": {
     "react-hook-form": "catalog:"
   }
   ```

4. Reinstall from root:
   ```bash
   pnpm install
   ```

Bump the version once in `pnpm-workspace.yaml` and every app picks it up on the next install — no need to update each `package.json` individually.

### Root-level installs (`-w` flag) — rare, tooling only
Only use this for things invoked as repo-wide commands (`turbo`, `prettier`, `typescript`, eslint configs) — never for anything imported inside application code.

```bash
pnpm add -D -w some-dev-tool
```

## Running things — Turborepo basics

```bash
turbo run dev                     # start every app's dev server
turbo run dev --filter=seller     # start only seller (and its workspace deps)
turbo run build                   # build everything, using Turbo's cache
turbo run build --filter=admin    # build only admin
```

`turbo.json` defines how tasks relate (e.g. `build` depends on `^build` — dependencies build first). Turbo caches task output based on a hash of inputs; unchanged packages skip re-running entirely.

## Native/build-script dependencies (sharp, oxide, etc.)

Some packages (e.g. `sharp`, `@tailwindcss/oxide`, `unrs-resolver`) compile native binaries via postinstall scripts. Newer pnpm blocks these by default for security. If you see `ERR_PNPM_IGNORED_BUILDS`, either:

```bash
pnpm approve-builds
```
or pre-approve known-safe packages in `pnpm-workspace.yaml`:
```yaml
onlyBuiltDependencies:
  - sharp
  - unrs-resolver
```

## shadcn/ui components

Add new components via:
```bash
pnpm ui:add <component-name>
```

**Important:** the shadcn CLI drops component source into `packages/ui` but does **not** reliably install every runtime dependency that component imports (e.g. `sonner` needed `sonner` itself, `lucide-react`, `next-themes`). After adding a component:

1. Check its imports.
2. Install any new ones into `packages/ui`:
   ```bash
   pnpm add <missing-package> --filter @repo/ui
   ```
3. If the consuming app also imports that package directly (not just through `@repo/ui`'s pre-built component), install it there too.

## Quick troubleshooting

| Symptom | Likely cause |
|---|---|
| `Cannot find module 'x'` at runtime | `x` not declared in that specific workspace's `package.json` — install it there |
| `ERR_PNPM_ADDING_TO_ROOT` | You ran `pnpm add` from root without `--filter` or `-w` |
| `ERR_PNPM_IGNORED_BUILDS` | Run `pnpm approve-builds` or add to `onlyBuiltDependencies` |
| Prettier/plugin fails to load in editor | Fully quit and reopen the editor after any `node_modules` reinstall — stale module paths get cached |
| Version mismatch between apps for the same package | Should be using the catalog (`catalog:`) — check `pnpm-workspace.yaml` |
