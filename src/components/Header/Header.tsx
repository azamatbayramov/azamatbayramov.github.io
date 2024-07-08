import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header_container}>
            <h1>Azamat Bayramov</h1>
            <nav className={styles.header_nav}>
                <a
                    href="/#about-me"
                    className={styles.header_link}
                >
                    About Me
                </a>
                <a
                    href="/#skills"
                    className={styles.header_link}
                >
                    Skills
                </a>
                <a
                    href="/#education"
                    className={styles.header_link}
                >
                    Education
                </a>
                <a
                    href="/#contacts"
                    className={styles.header_link}
                >
                    Contacts
                </a>
                <a
                    href="/joke"
                    className={styles.header_link}
                >
                    Joke
                </a>
            </nav>
        </header>
    );
};

export default Header;
