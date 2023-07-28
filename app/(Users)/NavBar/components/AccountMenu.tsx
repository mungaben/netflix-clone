import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  // not visisble return null
  if (!visible) return null;
  return (
    <div className="absolute right-0 flex-col w-56 py-5 bg-black border-2 border-gray-300 rounded-md top-10 ">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-row items-center w-full gap-3 px-3 group/item">
          <Image
            src={"/default-blue.png"}
            alt="logo"
            height={100}
            width={100}
            className="w-8 h-8 overflow-hidden rounded-md lg :w-10 lg-h-10"
          />
          <p className="text-sm text-white group-hover/item:underline">
            Profile
          </p>
        </div>
        <hr className="h-px my-4 bg-gray-600 border-0 " />
        <div
          onClick={() => signOut({callbackUrl:"/AuthUser"})}
          className="px-3 text-sm text-center text-white hover:underline"
        >
          Sign Out NetFlix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
