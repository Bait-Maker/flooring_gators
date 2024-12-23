import { LINKS } from "@/lib/constants";
import styles from "./Links.module.css";
import NavLink from "./NavLink";

const Links = () => {
  return (
    <div className={styles.container}>
      {LINKS.map((link) => {
        return (
          <NavLink key={link.label} href={link.href}>
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
