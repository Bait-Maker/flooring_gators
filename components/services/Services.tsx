import SectionHeader from "../utils/sectionHeader/SectionHeader";
import Grid from "./serviceCards/Grid";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <SectionHeader>Services</SectionHeader>

      <div className={styles.textContainer}>
        <h2>Flooring Gators Provides All-In-One Flooring Services</h2>
        <p>
          We offer everything you need in a flooring contractor, including
          moving furniture, deep cleaning during & after your project, and
          proper disposal of old flooring.
        </p>
      </div>

      <Grid />
    </section>
  );
};

export default Services;
