import React from "react";
import styles from "./Skills.module.css";

const skills = [
    "Python",
    "FastAPI",
    "Flask",
    "Aiogram",
    "Telebot",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "MongoDB",
    "Beanie",
    "S3",
    "Celery",
    "Redis",
    "RabbitMQ",
    "gRPC",
    "Git",
    "Docker",
    "Docker Compose",
    "Pytest",
    "Unittest",
    "Linux",
    "Bash",
    "Nginx",
    "CI/CD",
    "GitLab CI/CD",
    "Prometheus",
    "Grafana",
    "HTML",
    "CSS",
];

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul className={styles.skills_list}>
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className={styles.skill}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
