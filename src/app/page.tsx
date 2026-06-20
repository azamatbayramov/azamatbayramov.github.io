import Image from "next/image";
import styles from "./page.module.css";

const logoTileBackground = "rgba(255, 255, 255, 0.86)";

const experience = [
    {
        company: "Ozon Bank",
        role: "Go Backend Developer",
        period: "Mar 2025 – Present",
        logo: "/img/logos/ozon-bank.svg",
        logoSize: "2.35rem",
        logoBackground: logoTileBackground,
        bullets: [
            "Backend services for banking platform features",
            "GraphQL federation, integrations, and production support",
            "Notification flows, observability, metrics, and tracing",
        ],
    },
    {
        company: "MIDA",
        role: "Python Backend Developer",
        period: "Aug 2023 – Feb 2025",
        logo: "/img/logos/mida.svg",
        logoSize: "1.85rem",
        logoBackground: logoTileBackground,
        bullets: [
            "Educational platform backend and subscription logic",
            "Payments, billing integrations, and admin tools",
            "API design, backend delivery, and operational workflows",
        ],
    },
    {
        company: "Along",
        role: "Python Backend Developer",
        period: "Mar 2024 – Aug 2024",
        logo: "/img/logos/along.svg",
        logoSize: "2.05rem",
        logoBackground: logoTileBackground,
        bullets: [
            "FastAPI services and database design",
            "Microservice architecture and integrations",
            "Infrastructure preparation for product workflows",
        ],
    },
];

const skillGroups = [
    ["Languages", ["Go", "Python", "SQL"]],
    [
        "Backend",
        [
            "FastAPI",
            "PostgreSQL",
            "Kafka",
            "ClickHouse",
            "gRPC",
            "GraphQL",
            "SQLAlchemy",
            "Redis",
            "RabbitMQ",
        ],
    ],
    [
        "Infra & Tools",
        [
            "Docker",
            "Kubernetes",
            "GitLab CI/CD",
            "Prometheus",
            "Grafana",
            "Linux",
            "Nginx",
            "Caddy",
        ],
    ],
] as const;

const stats = [
    ["3+", "years experience"],
    ["Go + Python", "primary stack"],
    ["GPA 4.78/5.0", "Innopolis University"],
    ["Backend", "systems and product"],
] as const;

export default function Page() {
    return (
        <div className={styles.pageShell}>
            <div className={styles.ambientOne} />
            <div className={styles.ambientTwo} />

            <nav className={styles.navbar} aria-label="Main navigation">
                <a href="#top" className={styles.brand}>
                    <span className={styles.brandOrb} />
                    <span>Azamat Bayramov</span>
                </a>
                <div className={styles.navLinks}>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </div>
                <a className={styles.navCta} href="mailto:bayramov.azamat04@gmail.com">
                    Contact me
                </a>
            </nav>

            <main id="top" className={styles.content}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <span className={styles.eyebrow}>
                            <span /> Backend engineer crafting scalable systems
                        </span>
                        <h1>
                            Backend Engineer
                            <strong>Go / Python</strong>
                        </h1>
                        <p className={styles.heroText}>
                            I build reliable backend systems, integrations, and
                            experimentation-ready products.
                        </p>
                        <p className={styles.heroMeta}>
                            Student at <a href="#education">Innopolis University</a>
                            <span>•</span>
                            Go Backend Developer at <a href="#experience">Ozon Bank</a>
                        </p>
                        <div className={styles.heroActions}>
                            <a className={styles.primaryButton} href="#experience">
                                View experience <span>→</span>
                            </a>
                            <a className={styles.secondaryButton} href="#contact">
                                Contact me
                            </a>
                        </div>
                        <div className={styles.statsGrid}>
                            {stats.map(([value, label]) => (
                                <div className={styles.statCard} key={value}>
                                    <span>{value}</span>
                                    <p>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.portraitCard}>
                        <Image
                            src="/img/azamat-liquid-glass.svg"
                            width={320}
                            height={430}
                            alt="Azamat Bayramov"
                            priority
                            unoptimized
                            style={{
                                width: "min(100%, 23.5rem)",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </section>

                <section id="experience" className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2>Experience</h2>
                        <span>Production backend, fintech, and platform engineering</span>
                    </div>
                    <div className={styles.experienceGrid}>
                        {experience.map((item) => (
                            <article className={styles.experienceCard} key={item.company}>
                                <div className={styles.cardTopline}>
                                    <span
                                        className={styles.companyMark}
                                        style={{ background: item.logoBackground }}
                                    >
                                        <Image
                                            src={item.logo}
                                            width={44}
                                            height={44}
                                            alt={`${item.company} logo`}
                                            unoptimized
                                            style={{
                                                width: item.logoSize,
                                                height: item.logoSize,
                                                objectFit: "contain",
                                            }}
                                        />
                                    </span>
                                    <div>
                                        <h3>{item.company}</h3>
                                        <p>{item.role}</p>
                                    </div>
                                    <time>{item.period}</time>
                                </div>
                                <ul>
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="skills" className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2>Skills</h2>
                        <span>Core stack for backend systems and delivery</span>
                    </div>
                    <div className={styles.skillsGrid}>
                        {skillGroups.map(([title, items]) => (
                            <article className={styles.skillCard} key={title}>
                                <h3>{title}</h3>
                                <div className={styles.skillChips}>
                                    {items.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="education" className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2>Education</h2>
                        <span>CS foundation and early programming training</span>
                    </div>
                    <div className={styles.educationGrid}>
                        <article className={styles.educationCard}>
                            <span
                                className={styles.educationMark}
                                style={{ background: logoTileBackground }}
                            >
                                <Image
                                    src="/img/logos/innopolis.svg"
                                    width={44}
                                    height={44}
                                    alt="Innopolis University logo"
                                    unoptimized
                                    style={{
                                        width: "2.3rem",
                                        height: "2.3rem",
                                        objectFit: "contain",
                                    }}
                                />
                            </span>
                            <div>
                                <h3>Innopolis University</h3>
                                <p>BSc in Software Development</p>
                                <small>
                                    Computer science, algorithms, systems design,
                                    software engineering, and distributed technologies.
                                </small>
                            </div>
                            <div className={styles.educationMeta}>
                                <time>2022 – 2026</time>
                                <span>GPA 4.78/5.0</span>
                            </div>
                        </article>

                        <article className={styles.educationCard}>
                            <span
                                className={styles.educationMark}
                                style={{ background: logoTileBackground }}
                            >
                                <Image
                                    src="/img/logos/yandex-lyceum.svg"
                                    width={44}
                                    height={44}
                                    alt="Yandex Lyceum logo"
                                    unoptimized
                                    style={{
                                        width: "2.35rem",
                                        height: "2.35rem",
                                        objectFit: "contain",
                                    }}
                                />
                            </span>
                            <div>
                                <h3>Yandex Lyceum</h3>
                                <p>Programming foundations</p>
                                <small>
                                    Intensive Python and engineering fundamentals program.
                                </small>
                            </div>
                            <div className={styles.educationMeta}>
                                <time>2018 – 2020</time>
                                <span>Honors</span>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="contact" className={styles.contactBlock}>
                    <div>
                        <h2>Let&apos;s connect</h2>
                        <p>
                            Reach out for backend roles, product engineering work,
                            collaborations, or a technical conversation.
                        </p>
                    </div>
                    <div className={styles.contactGrid}>
                        <a href="https://t.me/azamatbayramov" target="_blank" rel="noreferrer">
                            <span>TG</span>
                            <strong>Telegram</strong>
                            <small>@azamatbayramov</small>
                        </a>
                        <a href="https://github.com/azamatbayramov" target="_blank" rel="noreferrer">
                            <span>GH</span>
                            <strong>GitHub</strong>
                            <small>github.com/azamatbayramov</small>
                        </a>
                        <a href="mailto:bayramov.azamat04@gmail.com">
                            <span>@</span>
                            <strong>Email</strong>
                            <small>bayramov.azamat04@gmail.com</small>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
