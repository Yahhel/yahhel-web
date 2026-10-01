export type LedgerEntryType = "sale" | "refund" | "withdrawal"

export type LedgerEntry = {
  id: string
  type: LedgerEntryType
  title: string
  reference: string
  date: string
  amount: number
}

export const LEDGER_ENTRIES: LedgerEntry[] = [
  {
    id: "1",
    type: "sale",
    title: "Sale: The Quiet Engineer (PS-4KS573)",
    reference: "PS-4KS573",
    date: "25 Aug 2026",
    amount: 1728,
  },
  {
    id: "2",
    type: "sale",
    title: "Sale: Building for Nigeria (PS-0ZGT1T)",
    reference: "PS-0ZGT1T",
    date: "25 Aug 2026",
    amount: 2304,
  },
  {
    id: "3",
    type: "sale",
    title: "Sale · The Quiet Engineer · via Chika (15%) · TXN_33J6K9",
    reference: "TXN_33J6K9",
    date: "25 Aug 2026",
    amount: 1710,
  },
  {
    id: "4",
    type: "sale",
    title: "Sale · The Quiet Engineer · direct · TXN_91F2A7",
    reference: "TXN_91F2A7",
    date: "25 Aug 2026",
    amount: 1710,
  },
  {
    id: "5",
    type: "sale",
    title: "Sale · Naira, Dust, and Time · direct · TXN_88D4E2",
    reference: "TXN_88D4E2",
    date: "25 Aug 2026",
    amount: 3040,
  },
  {
    id: "6",
    type: "sale",
    title: "Sale · Building for Nigeria · direct · TXN_22G5H8",
    reference: "TXN_22G5H8",
    date: "25 Aug 2026",
    amount: 2280,
  },
  {
    id: "7",
    type: "refund",
    title: "Refund · Building for Nigeria · via Chika · TXN_74A2X9",
    reference: "TXN_74A2X9",
    date: "25 Aug 2026",
    amount: -1824,
  },
  {
    id: "8",
    type: "sale",
    title: "Sale · Letters to a Young Writer · direct · TXN_55C3B1",
    reference: "TXN_55C3B1",
    date: "25 Aug 2026",
    amount: 1140,
  },
  {
    id: "9",
    type: "withdrawal",
    title: "Withdraw to GTBank ****4231 · PAY_A001",
    reference: "PAY_A001",
    date: "25 Aug 2026",
    amount: -5000,
  },
  {
    id: "10",
    type: "sale",
    title: "Sale · Building for Nigeria · via Chika (20%) · TXN_74A2X9",
    reference: "TXN_74A2X9",
    date: "25 Aug 2026",
    amount: 1824,
  },
]

export function getWalletSummary(entries: LedgerEntry[]) {
  const earned = entries.filter((e) => e.type === "sale").reduce((sum, e) => sum + e.amount, 0)
  const withdrawn = Math.abs(
    entries.filter((e) => e.type === "withdrawal").reduce((sum, e) => sum + e.amount, 0)
  )
  const refunds = Math.abs(
    entries.filter((e) => e.type === "refund").reduce((sum, e) => sum + e.amount, 0)
  )
  const balance = entries.reduce((sum, e) => sum + e.amount, 0)

  return { balance, earned, withdrawn, refunds }
}