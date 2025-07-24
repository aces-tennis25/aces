"use client"
import React from "react";
import Image from "next/image";
import aces from "@/public/aces.png";
// import motion from "motion/react"
import { motion } from "framer-motion";


const Logo = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        <Image src={aces} alt="logo" width={80} />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
