import React from 'react'
import styles from "./styles.module.scss"
import Image from 'next/image';
import history from "../../public/images/history_img.png"


export default function HistoryGastroChef() {
  return (
    <div className={styles.history}>
                <Image src={history}
                       alt="image" layout={'raw'} className={styles.history__img}/>

                <div className={styles.history__info}>
                    <h2 className={styles.history__info_title}>
                        Історія GastroChef почалася понад 6-ти років тому...
                    </h2>
                    <p className={styles.history__info_text}>
                        Тривалий час я спостерігав як людям не вистачає часу для правильного
                        і здорового харчування, яке правильного, просто харчування регулярного.
                    </p>
                    <p className={styles.history__info_text}>
                        Вони могли поснідати, в обід з'їсти щось типу шаурми або снека,
                        а ввечері через голод наїстись, що погано позначалось на їхньому обміні
                        речовин і звісно здоров'я.
                    </p>
                    <p className={styles.history__info_text}>
                        Бажання хоч якось змінити ситуацію і допомогти людям не давало мені
                        спокою та я вірішил відкрити доставку їжі правильного харчування.
                    </p>
                    <p className={styles.history__info_text}>
                        Я зі своїм 17-и річним досвідом у спорті і проф. освітою, разом
                        з дієтологом розробили раціони правильного харчування з підрахунком
                        калорій (КБЖВ).
                    </p>
                    <h3 className={styles.history__info_subtitle}>
                        Знайомтесь! Команда GastroChef!
                    </h3>
                </div>

    </div>
  )
}
