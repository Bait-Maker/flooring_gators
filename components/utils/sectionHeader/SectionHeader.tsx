import styles from "./SectionHeader.module.css";

type Props = {
  children: React.ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className={styles.header}>
      <span />
      <h2>{children}</h2>
      <span />
    </div>
  );
};

export default SectionHeader;
