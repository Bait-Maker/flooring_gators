import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.css";
import ActionLink from "@/components/utils/buttons/ActionLink";

type Props = {
  title: string;
  image: StaticImageData;
  href: string;
};

const Card = ({ title, image, href }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <Image
          src={image}
          alt={title}
          style={{ width: "100%", height: "auto" }}
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <ActionLink href={href}>View Location</ActionLink>
    </div>
  );
};

export default Card;
