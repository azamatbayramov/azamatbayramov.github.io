import React from 'react';
import styled from 'styled-components';
import { Section } from '../Common/Section';


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


const EducationList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 1.5em;
`

const EducationItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`

const EducationInfo = styled.p`
  font-style: italic;
`

const Education: React.FC = () => {
  return (
    <Section id="education">
      <h2>Education</h2>
      <EducationList>
        {education.map((edu, index) => (
          <EducationItem key={index}>
            <h3>{edu.institution}</h3>
            <EducationInfo>{edu.degree}</EducationInfo>
            <EducationInfo>{edu.period}</EducationInfo>
          </EducationItem>
        ))}
      </EducationList>
    </Section>
  );
};

export default Education;
