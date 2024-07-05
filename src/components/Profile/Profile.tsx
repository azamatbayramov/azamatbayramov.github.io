import React from 'react';
import styles from './Profile.module.css';


const Profile: React.FC = () => {
  return (
    <div className={styles.profile_container}>
      <img src="img/my_photo.jpg" alt="My Photo" className={styles.profile_image} />
      <div className={styles.profile_title}>
        <h1 className={styles.profile_title_text}>Azamat Bayramov</h1>
        <p>Python Backend Developer</p>
      </div>
    </div>
  );
};


export default Profile;
