import { HAMBURGER_VARIANTS, UNDERLAY_VARIANTS } from "@/lib/constants";
import { motion } from "motion/react";
import styles from "./HamburgerButton.module.css";

type Props = {
  active: boolean;
  onChange: () => void;
};

const HamburgerButton = ({ active, onChange }: Props) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className={styles.container}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onChange}
        className={`${styles.menuBtn} ${
          active ? styles.active : styles.notActive
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className={styles.styledSpan}
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className={styles.styledSpan}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />

        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className={styles.otherSpan}
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

export default HamburgerButton;
