import React from 'react';
import styles from './Education.module.css'


const education = [
  {
    institution: 'Innopolis University',
    degree: "Bachelor's Degree in Computer Science",
    period: '2022 - 2026',
  },
  {
    institution: 'Yandex Lyceum',
    degree: 'Python Backend Development',
    period: '2018-2020',
  },
  {
    institution: 'Bashkir Lyceum №136',
    degree: 'School Education',
    period: '2011-2022',
  }
];


const Education: React.FC = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul className={styles.education_list}>
        {education.map((edu, index) => (
          <li key={index} className={styles.education_item}>
            <h3>{edu.institution}</h3>
            <p className={styles.education_info}>{edu.degree}</p>
            <p className={styles.education_info}>{edu.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
