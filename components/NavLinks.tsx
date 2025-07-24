"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const links = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/about",
  },
  {
    name: "SERVICES",
    path: "/services",
  },
  {
    name: "TOP STUDENTS",
    path: "/students",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="2xl:flex space-x-6 mt-5">
      {links.map((link, index) => {
        const isActive: boolean = pathname === link.path;
        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ y: -2 }}
            className={`relative group text-gray-600 hover:text-green-600 ${
              isActive && `text-gray-900`
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
