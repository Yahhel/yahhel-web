export const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const conversion = (buyers: number, views: number) =>
    views === 0 ? "0.0%" : `${((buyers / views) * 100).toFixed(1)}%`;


export const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });