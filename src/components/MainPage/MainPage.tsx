import React from 'react';
import Profile from '../Profile/Profile';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Contacts from '../Contacts/Contacts';
import styles from './MainPage.module.css'


const MainPage = () => {
    return (
        <main className={styles.main_page_main}>
            <Profile />
            <AboutMe />
            <Skills />
            <Education />
            <Contacts />
        </main>
    );
};


export default MainPage;
