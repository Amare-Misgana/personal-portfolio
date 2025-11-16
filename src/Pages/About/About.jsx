import styles from "./About.module.css";
import Nav from "../../Components/Nav/Nav";
import SplitText from "../../Components/SplitText/SplitText";
import IconHolder from "../../Components/IconHolder/IconHolder";
import RippleGrid from "../../Components/RippleGrid/RippleGrid";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import GlassBox from "../../Components/GlassBox/GlassBox";
import {
	SiDjango,
	SiReact,
	SiReactos, // for React Native (there’s no exact icon, React icon is commonly used)
	SiHtml5,
	SiCss3,
	SiPython,
	SiJavascript,
	SiPostgresql,
	SiSqlite,
	SiGit,
	SiDocker,
	SiGithub
} from "react-icons/si";


const About = () => {

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);


	return (
		<div className={styles.AboutContainer}>

			<div className={styles.background}>

			</div>
			<div className={styles.content}>

				<Nav currentPage="about" />

				<div className={styles.header}>
					<SplitText
						text="About"
						splitType="chars"
						delay={100}
						duration={0.7}
						className={styles.pageTitle}
						threshold={0.3}
					/>
				</div>
				<main className={styles.mainContent}>
					<p className={styles.aboutMe}>
						Hi, I’m Amare, a full-stack developer specializing in Django and React. I design and build scalable back-end systems, clean APIs, and beautiful, intuitive user interfaces.<br /><br />

						Security is a top priority in everything I create. All my applications are safeguarded against brute-force attacks, DDoS, SQL injection, and other top OWASP security threats, ensuring reliable and trustworthy systems for users. I also focus on making UIs not only functional but visually appealing, delivering seamless interactions that users enjoy.
					</p>


					<h2>Tech Stack</h2>
					<div className={styles.techStack}>

						<GlassBox padding="2em" background="#111111e3" borderColor="gray" borderWidth="2px" borderStyle="solid" borderRadius={5}>
							<h3>Back-End</h3>
							<IconHolder icon={<SiPython />} iconLabel="Python" link="https://www.python.org/" />
							<IconHolder icon={<SiDjango />} iconLabel="Django" link="https://www.djangoproject.com/" />
							<IconHolder icon={<span style={{ fontWeight: 600 }}>API</span>} iconLabel="REST API" link="https://www.django-rest-framework.org/" text={true} />
						</GlassBox>

						<GlassBox padding="2em" background="#111111e3" borderColor="gray" borderWidth="2px" borderStyle="solid" borderRadius={5}>
							<h3>Front-End</h3>
							<IconHolder icon={<SiReact />} iconLabel="React" link="https://react.dev/" />
							<IconHolder icon={<SiHtml5 />} iconLabel="HTML5" link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
							<IconHolder icon={<SiCss3 />} iconLabel="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
							<IconHolder icon={<SiJavascript />} iconLabel="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
						</GlassBox>

						<GlassBox padding="2em" background="#111111e3" borderColor="gray" borderWidth="2px" borderStyle="solid" borderRadius={5}>
							<h3>Database</h3>
							<IconHolder icon={<SiPostgresql />} iconLabel="PostgreSQL" link="https://www.postgresql.org/" />
							<IconHolder icon={<SiSqlite />} iconLabel="SQLite" link="https://www.sqlite.org/index.html" />
						</GlassBox>

						<GlassBox padding="2em" background="#111111e3" borderColor="gray" borderWidth="2px" borderStyle="solid" borderRadius={5}>
							<h3>Tools & Others</h3>
							<IconHolder icon={<SiGit />} iconLabel="Git" link="https://git-scm.com/" />
							<IconHolder icon={<SiDocker />} iconLabel="Docker" link="https://www.docker.com/" />
							<IconHolder icon={<SiGithub />} iconLabel="GitHub" link="https://github.com/" />
						</GlassBox>

					</div>

				</main>
				<Footer />
			</div>
		</div>
	);
};

export default About;
