import styles from "./modalOnline.module.scss";
import Image from "next/image";
import close from "../../public/images/closeModal.svg";
import { useState } from "react";
import Select from "react-select";

export default function ModalOnline({ active, setActive, total }) {
  const { count, price } = total;
  const time = [
    {
      value: "13:00",
      label: "13:00",
    },
    {
      value: "14:30",
      label: "14:30",
    },
    {
      value: "15:45",
      label: "15:45",
    },
    {
      value: "17:00",
      label: "17:00",
    },
  ];

  const [timeDelivery, setTimeDelivery] = useState("Час доставки");

  const getValueTime = () => {
    return timeDelivery ? time.find((c) => c.value === timeDelivery) : "";
  };

  // const onChange = (newValue:any) => {
  //     setTimeDelivery(newValue.value)
  // }

  const pay = [
    {
      value: "visa",
      label: "visa",
    },
    {
      value: "Податковий платіж",
      label: "Податковий платіж",
    },
    {
      value: "Privat24",
      label: "Privat24",
    },
  ];
  const [payDelivery, setPayDelivery] = useState("Час доставки");

  const getValuePay = () => {
    return payDelivery ? pay.find((c) => c.value === payDelivery) : "";
  };

  const know = [
    {
      value: "instagram",
      label: "instagram",
    },
    {
      value: "Google реклама",
      label: "Google реклама",
    },
    {
      value: "Від знайомих",
      label: "Від знайомих",
    },
  ];
  const [whereKnow, setWhereKnow] = useState("Звідки дізналися про нас");
  const getValueKnow = () => {
    return whereKnow ? know.find((c) => c.value === whereKnow) : "";
  };

  const connect = [
    {
      value: "Дзвінок для підтвердження замовлення",
      label: "Дзвінок для підтвердження замовлення",
    },
    {
      value: "СМС для підтвердження замовлення",
      label: "СМС для підтвердження замовлення",
    },
    {
      value: "Не підтверждувати замовлення",
      label: "Не підтверждувати замовлення",
    },
  ];
  const [connectUs, setConnectUs] = useState("Як з Вами зв'язатися?");
  const getValueConnect = () => {
    return connectUs ? connect.find((c) => c.value === connectUs) : "";
  };


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      
      outLine: "none",
      backgroundColor: state.isSelected ? "#64D370" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#64D370",
        color: "white",
      },
    }),
    input: (provided) => ({
        ...provided,
        borderRadius: "190px",
      }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
    }),
    control: (provided) => ({
        ...provided,
        boxShadow: "none !important",
        borderRadius: "190px",
        borderColor: "green !important",
        "&:hover": {
          borderColor: "green !important",
        },
        "&:focus": {
          borderColor: "green !important",
        },
      }),
  };

  return (
    <div
      className={[active ? styles.modal__active : styles.modal]}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__close}>
          <h2
            className={styles.modal__mistake}
            onClick={() => setActive(false)}
          >
            Заповніть усі поля правильно
          </h2>
          <Image
            onClick={() => setActive(false)}
            src={close}
            alt="close"
            layout={"row"}
            className={styles.modal__close_img}
          />
        </div>
        <div className={styles.modal__wrapp}>
          <div className={styles.modal__wrapp_left}>
            <input
              className={styles.modal__input}
              required
              placeholder="Ім'я"
              name="name"
              type="text"
            />
            <input
              className={styles.modal__input}
              required
              placeholder="Введіть номер телефону"
              name="tel"
              type="text"
            />
            <div className={styles.modal__wrapp_adrress}>
              <input
                className={styles.modal__input}
                required
                placeholder="Вулиця"
                name="name"
                type="text"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Дім:"
                name="name"
                type="text"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Поверх:"
                name="name"
                type="text"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Квартира: "
                name="name"
                type="text"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Парадна:"
                name="name"
                type="text"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Домофон: "
                name="name"
                type="text"
              />
            </div>
          </div>
          <div className={styles.modal__wrapp_right}>
            <Select
              classNamePrefix="modal__select"
              // onChange={onChange}
              value={getValueTime()}
              options={time}
              placeholder="Час доставки"
              styles={customStyles}
            />
            <Select
              classNamePrefix="modal__select"
              value={getValuePay()}
              options={pay}
              placeholder="Спосіб оплати"
              styles={customStyles}
            />
            <Select
              classNamePrefix="modal__select"
              value={getValueKnow()}
              options={know}
              placeholder="Як дізналися про нас"
              styles={customStyles}
            />
            <Select
              classNamePrefix="modal__select"
              value={getValueConnect()}
              options={connect}
              placeholder="Як з Вами св'язатися?"
              styles={customStyles}
            />
          </div>
        </div>
        <div className={styles.modal__order}>
          <div className={styles.modal__btn} onClick={() => setActive(false)}>
            Замовити
          </div>
          <div className={styles.modal__total}>
            {count} шт / {price} грн
          </div>
        </div>
      </div>
    </div>
  );
}
