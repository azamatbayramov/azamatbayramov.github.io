import React from 'react';
import styles from './Contacts.module.css'
import Image from 'next/image';


const Contacts: React.FC = () => {
  return (
    <section id="contacts">
      <h2>Contacts</h2>
      <div className={styles.contacts_container}>
        <a href="https://t.me/azamatbayramov" id="tg-link">
          <Image src="img/telegram.svg" alt="Telegram Logo" className={styles.contact_icon}/>
        </a>
        <a href="https://github.com/azamatbayramov" id="gh-link">
          <Image src="img/github.svg" alt="GitHub Logo" className={styles.contact_icon}/>
        </a>
        <a href="mailto:bayramov.azamat04@gmail.com" id="email">
          <Image src="img/email.svg" alt="Email Logo" className={styles.contact_icon}/>
        </a>
      </div>
    </section>
  );
};


export default Contacts;
