import SectionHeader from "../utils/sectionHeader/SectionHeader";
import Grid from "./areaCards/Grid";
import styles from "./ServiceArea.module.css";

const ServiceArea = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>Locations</SectionHeader>
      <Grid />
    </section>
  );
};

export default ServiceArea;
