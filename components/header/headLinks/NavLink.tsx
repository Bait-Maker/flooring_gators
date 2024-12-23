import Link from "next/link";
import styles from "./NavLink.module.css";

type Props = {
  children: React.ReactNode;
  href: string;
};

const NavLink = ({ children, href }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link href={href} className={styles.link}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
