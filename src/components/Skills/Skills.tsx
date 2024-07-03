import React from 'react';
import styled from 'styled-components';
import { Section } from '../Common/Section';


const SkillsList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-flow: row wrap;

  gap: 0.5em;
  margin: 0;
`

const Skill = styled.li`
  background-color: var(--color3);
  color: var(--color4);

  padding: 0.5em 1em;
  border-radius: 5px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`


const skills = [
  'Python', 'FastAPI', 'Flask', 'Aiogram', 'Telebot', 'PostgreSQL', 'SQLAlchemy', 'Alembic',
  'MongoDB', 'Beanie', 'S3', 'Celery', 'Redis', 'RabbitMQ', 'gRPC', 'Git', 'Docker',
  'Docker Compose', 'Pytest', 'Unittest', 'Linux', 'Bash', 'Nginx', 'CI/CD', 'GitLab CI/CD',
  'Prometheus', 'Grafana', 'HTML', 'CSS'
];

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <SkillsList>
        {skills.map(skill => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsList>
    </Section>
  );
};

export default Skills;
