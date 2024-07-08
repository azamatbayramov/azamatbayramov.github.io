import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer_container}>
            <p className={styles.footer_text}>&copy; 2024 Azamat Bayramov</p>
        </footer>
    );
};

export default Footer;
