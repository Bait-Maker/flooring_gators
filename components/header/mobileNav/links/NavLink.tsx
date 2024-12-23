"use client";
import { motion } from "motion/react";
import styles from "./NavLink.module.css";

type Props = {
  children: React.ReactNode;
  href: string;
  index: number;
};

const NavLink = ({ children, href, index }: Props) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + index * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className={styles.motionLink}
    >
      {children}
    </motion.a>
  );
};

export default NavLink;
