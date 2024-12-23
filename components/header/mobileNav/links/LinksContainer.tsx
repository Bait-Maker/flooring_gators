"use client";
import { LINKS } from "@/lib/constants";
import { motion } from "motion/react";
import NavLink from "./NavLink";
import styles from "./LinksContainer.module.css";

const LinksContainer = () => {
  return (
    <motion.div className={styles.linksContainer}>
      {LINKS.map((link, index) => {
        return (
          <NavLink key={link.label} href={link.href} index={index}>
            {link.label}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

export default LinksContainer;
