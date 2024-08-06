import styles from './FooterStyles.module.css';
import twitterDark from '../../assets/twitter-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

function Footer() {
  const twitterIcon =  twitterDark;
  const githubIcon =  githubDark;
  const linkedinIcon = linkedinDark;
  return (
    <section id="footer" className={styles.container}>
      {/* <div>
        <p>&copy; 2024 Krishna Singh.</p>
      </div> */}
      <span>
        <a href="https://www.linkedin.com/in/krishna-singh-5a2244196" target="_blank">
          <img src={linkedinIcon} alt="Linkedin icon" className={styles.img_height}/>
        </a>
        <a href="https://www.github.com/Szkrishna" target="_blank">
          <img src={githubIcon} alt="Github icon" className={styles.img_height}/>
        </a>
        <a href="https://www.x.com/Krishna54418609" target="_blank">
          <img src={twitterIcon} alt="Twitter icon" className={styles.img_height} />
        </a>
      </span>
      {/* <div>
        <p> All rights reserved.</p>
      </div> */}
    </section>
  );
}

export default Footer;
