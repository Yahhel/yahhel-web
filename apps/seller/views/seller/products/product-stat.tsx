import React from 'react';

const ProductStat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="mb-1 leading-none text-[#766860]">{icon}</span>
      <span className="text-xs text-[#1D1816] font-semibold">{value}</span>
      <span className="text-[9px] uppercase tracking-wide text-[#766860]">
        {label}
      </span>
    </div>
  );
};

export default ProductStat;
