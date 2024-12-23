import styles from "./Chip.module.css";

type Props = {
  children: React.ReactNode;
};

export const Chip = ({ children }: Props) => {
  return <div className={styles.chip}>{children}</div>;
};
