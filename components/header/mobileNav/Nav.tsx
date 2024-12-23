"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import styles from "./Nav.module.css";
import HamburgerButton from "./hamburger-button/HamburgerButton";
import LinksOverlay from "./links/LinksOverlay";

const Nav = () => {
  const [active, setActive] = useState(false);

  function handleChange() {
    setActive((pv) => !pv);
  }

  return (
    <div className={styles.container}>
      <HamburgerButton active={active} onChange={handleChange} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </div>
  );
};

export default Nav;
