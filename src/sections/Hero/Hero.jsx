import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
// import githubLight from '../../assets/github-light.svg';
// import githubDark from '../../assets/github-dark.svg';
// import linkedinLight from '../../assets/linkedin-light.svg';
// import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  // const githubIcon = theme === 'light' ? githubLight : githubDark;
  // const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Krishna Singh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.fw600}>
          Krishna Singh
        </h1>
        <h2>Web Developer</h2>
        {/* <span>
          <a href="https://www.linkedin.com/in/krishna-singh-5a2244196" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.github.com/Szkrishna" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.x.com/Krishna54418609" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span> */}
        <p className={styles.description}>
          With a passion for developing modern web applications using React, Angular, and Next.js, I specialize in creating
          dynamic and responsive interfaces for commercial businesses. Leveraging my expertise in both front-end and back-end 
          technologies, I build scalable and efficient solutions using MySQL and MongoDB databases. My back-end skills include 
          Python (FastAPI) and Node.js, allowing me to create robust and high-performance APIs.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
