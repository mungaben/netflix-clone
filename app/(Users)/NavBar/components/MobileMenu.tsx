import Link from "next/link";
import React from "react";

interface MobilMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobilMenuProps> = ({ visible }) => {
  // not visible return null
  if (!visible) return null
  return (
    <div className="absolute left-0 flex w-56 py-5 border-2 border-gray-800 rounded-md top-8">
      <div className="flex flex-col gap-4 ">
        <div  className="px-3 text-2xl text-center text-white hover:underline">
          <Link href={"/"}>
            Home
          </Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          series
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Files
        </div>
        <div className="px-3 text-center text-white hover:underline">
          MyList
        </div>
        <div className="px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Browse by languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
