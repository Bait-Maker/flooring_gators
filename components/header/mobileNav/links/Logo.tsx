"use client";

import SvgLogo from "@/components/utils/svgLogo";
import { motion } from "motion/react";
import styles from "./Logo.module.css";
import HeaderSvg from "@/components/utils/headerSvg";

const Logo = () => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="/"
      className={styles.motionLink}
    >
      <HeaderSvg />
    </motion.a>
  );
};

export default Logo;
