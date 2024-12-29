import Link from "next/link";
import styles from "./ActionLink.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

const ActionLink = ({ href, children }: Props) => {
  return (
    <Link href={href} className={styles.phoneLink}>
      {children}
    </Link>
  );
};

export default ActionLink;
