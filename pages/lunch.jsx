import React from "react";
import data from "../data/BusinessLunch";
import styles from "../styles/shopItem.module.scss";
import { useState, useEffect } from "react";

import Image from "next/image";
import PhotosSwiper from "../components/PhotosSwiper";
import LunchItem from "../components/LunchItem";
import LunchItemModal from "../components/Modal/LunchItemModal";
import Modal from "../components/Modal/ModalLunch";
import ModalNumber from "../components/Modal/ModalNumber";
import ModalOnline from "../components/Modal/ModalOnline";

export default function lunch() {
  const [cart, setCart] = useState(data);
  const [modalLunchActive, setModalLunchActive] = useState(false);
  const [numberActive, setNumberActive] = useState(false);
  const [onlineActive, setOnlineActive] = useState(false);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: cart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: cart.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [cart]);

  const increase = (id) => {
    setCart(() => {
      return cart.map((lunchItem) => {
        if (lunchItem.id === id) {
          return {
            ...lunchItem,
            count: lunchItem.count + 1,
            priceTotal: (lunchItem.count + 1) * lunchItem.price,
          };
        }
        return lunchItem;
      });
    });
  };

  const decrease = (id) => {
    setCart(() => {
      return cart.map((lunchItem) => {
        if (lunchItem.id === id) {
          const newCount = lunchItem.count - 1 >= 0 ? lunchItem.count - 1 : 0;
          return {
            ...lunchItem,
            count: newCount,
            priceTotal: newCount * lunchItem.price,
          };
        }
        return lunchItem;
      });
    });
  };

  const lunch = cart.map((lunchItem) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <LunchItem
        key={lunchItem.id}
        lunchItem={lunchItem}
        increase={increase}
        decrease={decrease}
      />
    );
  });
  const lunchModal = cart.map((lunchItem) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <LunchItemModal
        key={lunchItem.id}
        lunchItem={lunchItem}
        total={total}
        increase={increase}
        decrease={decrease}
      />
    );
  });

  return (
    <>
      <Modal
        active={modalLunchActive}
        setActive={setModalLunchActive}
        total={total}
        lunchModal={lunchModal}
        increase={increase}
        decrease={decrease}
        numberActive={numberActive}
        setNumberActive={setNumberActive}
        onlineActive={onlineActive}
        setOnlineActive={setOnlineActive}
      />
      <ModalNumber active={numberActive} setActive={setNumberActive} />
      <ModalOnline
        total={total}
        active={onlineActive}
        setActive={setOnlineActive}
      />
      <section className={styles.product__info}>
        <div className={styles.container}>
          <h2 className={styles.product__info_title}>Бізнес-ланчі</h2>
          <p className={styles.product__info_text}>
            Представляємо солодку колекцію корисних цукерок. Створені з любов'ю та
            виготовлені з натуральних продуктів без додавання цукру - з
            турботой про Вас и ваших близьких!
            <br />
            <br />
            Вартість доставки 60 грн за попереднім замовленням (за 1-ну добу).
            Попереднє замовлення передбачає доставку на наступний день з
            6:00-10:00. Мінімальне замовлення - від 6-ти цукерок. Вага 1 цукерки 25 г.
            <br />
            <br />
            Замовлення на завтра приймаються до 11-00 поточного дня.
            <br />
            <br />
            Цукерки доставляються в картоних пакетах зі стікером. Ви можете
            замовити подарунковий бокс зі стрічкою вартістью 20 грн
          </p>
        </div>
      </section>
      <section className={styles.product__main}>
        <div className={styles.container}>
          <div className={styles.product__header}>
            <button
              className={styles.product__order}
              onClick={() => setModalLunchActive(true)}
            >
              Оформити замовлення
            </button>
          </div>
          <div className={styles.product__items}>{lunch}</div>
        </div>
      </section>
      <PhotosSwiper />
    </>
  );
}
