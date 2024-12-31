import SectionHeader from "../utils/sectionHeader/SectionHeader";
import styles from "./Warranty.module.css";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiShieldCheckFill } from "react-icons/pi";
import { FaFileContract } from "react-icons/fa";
import ActionLink from "../utils/buttons/ActionLink";

const Warranty = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>Warranty</SectionHeader>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>
            <FaFileContract />
            Have Confidence In Your Flooring Project
          </h3>
          <p className={styles.subtitle}>
            Click below to see the warranties we offer for your home flooring
            project. We cover refinishing, installation, and floor repairs.
          </p>

          <ActionLink href="#">View Our Flooring Warranty</ActionLink>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>
            <PiShieldCheckFill />
            Our Flooring Company Is Licensed & Insured
          </h3>
          <p className={styles.subtitle}>
            In the rare case of us damaging anything in/on your property. That
            includes: Plumbing, Drywall Damage, etc. We are fully-insured to
            cover you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
