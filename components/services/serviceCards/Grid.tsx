import { SERVICE_CARDS } from "@/lib/constants";
import styles from "./Grid.module.css";
import Card from "./Card";

const Grid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.flexGrid}>
        <div className={styles.cell}>
          <ul className={styles.cardList}>
            {SERVICE_CARDS.map((card) => {
              return (
                <li key={card.title} className={styles.card}>
                  <Card
                    title={card.title}
                    description={card.description}
                    chips={card.chips}
                    image={card.image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
