import { AREA_CARDS } from "@/lib/constants";
import Card from "./Card";
import styles from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.flexGrid}>
        <div className={styles.cell}>
          <ul className={styles.cardList}>
            {AREA_CARDS.map((card) => {
              return (
                <li key={card.title} className={styles.card}>
                  <Card
                    title={card.title}
                    image={card.image}
                    href={card.href}
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
