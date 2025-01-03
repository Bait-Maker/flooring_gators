import Link from "next/link";
import styles from "./Footer.module.css";
import { AREA_CARDS } from "@/lib/constants";
import { SOCIAL_CTAS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexGrid}>
        <div className={styles.hoursCell}>
          <h3 className={styles.title}>Hours of Operation</h3>
          <ul className={styles.hours}>
            <li>
              <p>M-F: 9AM - 5PM</p>
            </li>
            <li>
              <p>Saturday: 9AM - 2PM</p>
            </li>
            <li>
              <p>Sunday: Closed</p>
            </li>
          </ul>
        </div>

        <div className={styles.serviceCell}>
          <h3 className={styles.title}>Service Areas</h3>
          <ul className={styles.areas}>
            {AREA_CARDS.map((link) => {
              return (
                <li key={link.title}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.socialsCell}>
          <h3 className={styles.title}>Socials</h3>
          <ul className={styles.socials}>
            {SOCIAL_CTAS.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.href}>
                    <link.Component />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 Flooring Gators | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
