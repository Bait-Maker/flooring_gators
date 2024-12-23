import styles from "./Card.module.css";
import Image from "next/image";
import tempImg from "@/assets/hardwood.jpg";
import { Chip } from "@/components/utils/chip/Chip";

type Props = {
  title: string;
  description: string;
  chips: string[];
};

const Card = ({ title, description, chips }: Props) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={tempImg}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.chips}>
        {chips.map((chip, index) => {
          return <Chip key={index}>{chip}</Chip>;
        })}
      </div>

      <button className={styles.button}>Learn More</button>
    </div>
  );
};

export default Card;
