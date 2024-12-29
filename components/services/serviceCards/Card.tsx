import styles from "./Card.module.css";
import Image, { StaticImageData } from "next/image";
import { Chip } from "@/components/utils/chip/Chip";

type Props = {
  title: string;
  description: string;
  chips: string[];
  image: StaticImageData;
};

const Card = ({ title, description, chips, image }: Props) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={image}
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

      <ul className={styles.chips}>
        {chips.map((chip, index) => {
          return (
            <li key={index}>
              <Chip>{chip}</Chip>
            </li>
          );
        })}
      </ul>

      <button className={styles.button}>Learn More</button>
    </div>
  );
};

export default Card;
