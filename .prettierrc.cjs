module.exports = {
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    printWidth: 80,
    trailingComma: 'all',
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrder: [
      '^react$',
      '<THIRD_PARTY_MODULES>',
      '^@[^\\/\\s]+',
      '^@',
      '^[./]',
      '^.+\\.(gif|png|svg|jpg)$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
  };