import Link from "next/link";
import React from "react";
import { BiGlobe, BiHome } from "react-icons/bi";
import { BsFile, BsPower } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiCustomerServiceFill } from "react-icons/ri";
import NavLinks from "./nav-links";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="text-2xl text-white md:w-40 flex items-center">
          <BiGlobe /> <p>Acme</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          <NavLinks />

          <div className="flex items-end">
            <button className="flex items-center w-full gap-1 text-xl p-4 delay-75  hover:bg-blue-100 hover:text-blue-800">
              <BsPower />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
