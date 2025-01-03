import Link from "next/link";
import styles from "./Hero.module.css";
import SvgLogo from "../utils/svgLogo";
import { BlobSvg, BlogSvgI } from "../utils/blobSvg";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroRight}>
          <SvgLogo />
        </div>

        <div className={styles.heroLeft}>
          <h1 className={styles.heading}>
            Hardwood Floor Refinishing <br /> & Installation Pro's
          </h1>
          <p className={styles.subHeading}>
            Providing for <span>Chicagoland</span> and surrounding areas!
          </p>

          <div className={styles.linkContainer}>
            <Link href={"tel:7083360939"} className={styles.phoneLink}>
              Let's Talk Flooring!
              <span>
                <FaArrowRightLong />
              </span>
            </Link>

            <Link href={"tel:7083360939"} className={styles.phoneLink}>
              Call: 708-336-0939
            </Link>
          </div>
        </div>
      </div>

      <BlobSvg className={styles.blob} />
      <BlogSvgI className={styles.blobI} />
    </section>
  );
};

export default Hero;
