import React from "react";
import Profile from "../components/Profile/Profile";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Contacts from "../components/Contacts/Contacts";
import styles from "./page.module.css";

const Page = () => {
    return (
        <div className={styles.main_page_container}>
            <Profile />
            <AboutMe />
            <Skills />
            <Education />
            <Contacts />
        </div>
    );
};

export default Page;
