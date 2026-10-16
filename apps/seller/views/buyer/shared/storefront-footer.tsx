import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/constants/assets.constants';

const StoreFrontFooter = () => {
  return (
    <div className="border-t-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl flex items-center justify-between py-5 text-sm">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center justify-center h-7 w-7 rounded-xl bg-[#1D1816] p-1.5">
            <Image alt="logo" src={logo} />
          </div>
          <h2 className="font-serif font-semibold text-sm text-[#1D1816] ">
            Pager Sell
          </h2>
        </div>
        <div className="flex gap-6 text-[#766860] text-xs">
          <Link href="#">Creator</Link>
          <Link href="#">Support</Link>
          <Link href="#">My Library</Link>
        </div>
      </div>
    </div>
  );
};

export default StoreFrontFooter;
