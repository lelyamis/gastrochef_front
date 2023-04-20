import styles from "./styles.module.scss";
import advantage1 from "../../public/images/advantage_1.svg";
import advantage2 from "../../public/images/advantage_2.svg";
import advantage3 from "../../public/images/advantage_3.svg";
import advantage4 from "../../public/images/advantage_4.svg";
import advantage5 from "../../public/images/advantage_5.svg";
import advantage6 from "../../public/images/advantage_6.svg";
import Image from "next/image";
export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__container}>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src='/images/advantage_1.svg'
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Бережемо природу. Еко-тара і прилади.
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src='/images/advantage_2.svg'
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            28 дній без повторень, понад 300 страв!
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src='/images/advantage_3.svg'
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Безкоштовно замінюємо страви й інгредієнти.
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src='/images/advantage_4.svg'
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Готуємо вночі, пакуємо і відправляємо Вам!
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src='/images/advantage_5.svg'
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Щоденна зручна і безкоштовна доставка з 6:00 до 10:00
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src='/images/advantage_6.svg'
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Зберігаємо Вашу енергію і до 14 годин на тиждень звільняємо від готування!
          </p>
        </div>
      </div>
    </div>
  );
}
