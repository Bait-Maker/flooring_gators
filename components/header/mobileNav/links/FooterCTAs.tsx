import { motion } from "motion/react";
import styles from "./FooterCTAs.module.css";
import { SOCIAL_CTAS } from "@/lib/constants";
import { FiArrowRight } from "react-icons/fi";

const FooterCTAs = () => {
  return (
    <>
      <div className={styles.container}>
        {SOCIAL_CTAS.map((link, index) => {
          return (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + index * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <link.Component className={styles.Link} />
            </motion.a>
          );
        })}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.125, duration: 0.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, y: 8 }}
        className={styles.contactButton}
      >
        <span>contact us</span> <FiArrowRight />
      </motion.button>
    </>
  );
};

export default FooterCTAs;
