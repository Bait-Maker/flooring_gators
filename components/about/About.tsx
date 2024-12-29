import Image from "next/image";
import SectionHeader from "../utils/sectionHeader/SectionHeader";
import styles from "./About.module.css";
import famImg from "@/assets/family_gators.webp";
import ActionLink from "../utils/buttons/ActionLink";

const About = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>About</SectionHeader>
      <div className={styles.about}>
        <div className={styles.imgDiv}>
          <Image
            src={famImg}
            alt="flooring gators"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "70vh",
              maxWidth: "70vw",
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>Family-Owned Business</h2>
          <p>
            Whether you're just looking to apply a maintenance coat, repair a
            portion of your floor, change the color of your flooring, or install
            brand new flooring -{" "}
            <b>Solid Hardwood, Engineered Wood, Vinyl, Laminate</b>. Let it be
            any wood style flooring need, <b>Flooring Gators</b> is always here
            to help.
          </p>

          <ActionLink href={"tel:7083360939"}>Give Us A Call</ActionLink>
        </div>
      </div>
    </section>
  );
};

export default About;
