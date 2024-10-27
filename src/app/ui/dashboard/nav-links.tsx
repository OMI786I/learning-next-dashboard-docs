"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { FiFile } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiCustomerServiceFill } from "react-icons/ri";

const NavLinks = () => {
  const presentLink = usePathname();

  console.log(presentLink);
  const links = [
    { name: "Home", href: "/dashboard", icon: <HiHome /> },
    {
      name: "Invoices",
      href: "/dashboard/invoices",
      icon: <FiFile />,
    },
    {
      name: "Customers",
      href: "/dashboard/customers",
      icon: <RiCustomerServiceFill />,
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link href={`${link.href}`} key={link.name}>
          <div
            className={`flex items-center text-xl p-4 hover:bg-blue-400 hover:text-white ${
              link.href == presentLink ? "bg-blue-400 text-white" : ""
            }`}
          >
            <span className="w-6">{link.icon}</span>
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
