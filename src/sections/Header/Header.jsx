// components/Header.js
import { Link } from 'react-router-dom';
import styles from './HeaderStyles.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <nav className={styles.nav}>
                    <div className={styles.nav_links}>
                        <Link to="#works" className={styles.link}>Works</Link>
                        <Link to="#projects" className={styles.link}>Projects</Link>
                        <Link to="#skills" className={styles.link}>Skills</Link>
                        <Link to="#contact" className={styles.link}>Contact</Link>
                    </div>
                </nav>
            </div>
            <div>
                {/* <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/> */}
            </div>
        </header>
    );
};

export default Header;
