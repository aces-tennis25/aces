"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavLinks from "./NavLinks";

import Logo from "@/components/Logo";

import { Button } from "@/components/ui/button";

const MainNav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <NavLinks />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              variant="secondary"
              className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              <Link href="/contact">Book Session</Link>
            </Button>
          </motion.div>
          {/* <Button className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md text-white mt-5">
            <Link href="/contact">Book Session</Link>
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
