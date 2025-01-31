import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/images/logoHeader.svg";
import phone from "../../public/images/phone_icon.svg"


export default function Header() {
  const [selectedLink, setSelectedLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className={styles.header}>
      <Image src={logo} className={styles.logo} />
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${isOpen ? styles.header__links_mobile : styles.header__links}`}>
        <Link 
        
          href="/"
          className={`${styles.header__link} ${
            selectedLink === "program" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("program"), closeMenu()}}
        >
          Програма харчування
        </Link>
        <Link 
        
          href="/lunch"
          className={`${styles.header__link} ${
            selectedLink === "business" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("business"), closeMenu()}}
        >
          Бізнес ланчі
        </Link>
        <Link 
        
          href="/shop"
          className={`${styles.header__link} ${
            selectedLink === "shop" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("shop"),closeMenu()}}
        >
          Gastro Shop
        </Link>
        <Link 
        
          href="/about"
          className={`${styles.header__link} ${
            selectedLink === "about" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("about"),closeMenu()}}
        >
          Про нас
        </Link>
        <Link 
        
          href="/blog"
          className={`${styles.header__link} ${
            selectedLink === "blog" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("blog"),closeMenu()}}
        >
          Блог
        </Link>
        <Link href="tel:+380636529793" className={styles.header__phone_number_mobile}>
          <p> +38 (063) 652-97-93</p>
        </Link>
      </div>
      <div className={styles.header__phone}>
        <Link href="tel:+380636529793" className={styles.header__phone_number}>
          <p> +38 (063) 652-97-93</p>
          <Image src={phone} className={styles.header__phone_number_icon} width={64} height={64}/> 
        </Link>
      </div>
    </header>
  );
}
