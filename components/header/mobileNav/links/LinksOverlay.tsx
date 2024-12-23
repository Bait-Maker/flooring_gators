import FooterCTAs from "./FooterCTAs";
import LinksContainer from "./LinksContainer";
import Logo from "./Logo";
import styles from "./LinksOverlay.module.css";

const LinksOverlay = () => {
  return (
    <nav className={styles.overlay}>
      <Logo />
      <LinksContainer />
      <FooterCTAs />
    </nav>
  );
};

export default LinksOverlay;
