import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/gators_logo_pic.png";
import { FiMenu } from "react-icons/fi";
import { LINKS } from "@/lib/constants";
import Nav from "./mobileNav/Nav";
import Links from "./headLinks/Links";
import HeaderSvg from "../utils/headerSvg";

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="flooring gators"
              width={200}
              className={styles.logo}
            />
          </Link>

          <div className={styles.linksContainer}>
            <Links />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
