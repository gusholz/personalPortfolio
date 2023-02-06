import Link from "next/link";
import styles from './nav.module.css'

export default function Nav(): JSX.Element{
    return <nav className={styles.menuNav}>
        <ul className={styles.lista}>
            <li className={styles.li}>
                <img className={styles.menuHamburguer} alt="" src={`images/hamburger-menu.webp`}></img>
            </li>
            <li className={styles.li}>
                <Link target={"_blank"} href="https://github.com/gusholz"><img className={styles.images} src={`images/githubIcon.svg`}></img></Link>
            </li>
            <li className={styles.li}>
                <Link target={"_blank"} href="https://www.linkedin.com/in/gustavo-holzmann-771781175/"><img className={styles.images} alt="" src={`images/linkedinIcon.svg`}></img></Link>
            </li>
            <li className={styles.li}>
                <a href="mailto:gustavobarretohv@live.com?subject=Contato%20para%20fins%20comerciais%2Fprofissionais" target={"_blank"}><img className={styles.images} alt="" src={`images/emailIcon.svg`}></img></a>
            </li>
        </ul>
    </nav>
}

