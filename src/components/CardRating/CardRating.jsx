import { useState } from "react";
import styles from "./CardRating.module.scss";

const TOTAL_STARS = 5;

export const CardRating = () => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.ratingCard}>
      {[...Array(TOTAL_STARS)].map((_, idx) => {
        const starValue = idx + 1;
        return (
          <span
            key={starValue}
            className={`${styles.star} ${
              hovered >= starValue || selected >= starValue
                ? styles.active
                : styles.inactive
            } ${hovered === starValue ? styles.hovered : ""}`}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setSelected(starValue)}
            tabIndex={0}
            role="button"
            aria-label={`${starValue} estrela${starValue > 1 ? "s" : ""}`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
