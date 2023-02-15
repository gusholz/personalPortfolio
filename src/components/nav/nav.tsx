import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styles from './nav.module.css'

export default function Nav(): JSX.Element{

    let jsx = <></>

    const [menuVisivel,setMenuVisivel] = useState(false);

    const showMenu = () =>{
        setMenuVisivel(!menuVisivel);
    }

    const tamanhoSvg = 90;

    if(menuVisivel){
        jsx = (
            <>
                <span className={menuVisivel? `${styles.menu}`: `${styles.menuDesabilitado}`}></span>
                <nav className={styles.menuNav}>
                    <ul className={styles.lista}>
                        <motion.li  className={styles.li}>
                            <motion.svg whileHover={{scale:1.2}} whileTap={{scale:0.9}} onClick={showMenu} className={styles.menuX} viewBox="0 0 50 50" overflow="visible" stroke="black" stroke-width="10" stroke-linecap="round">
                                <line x1="0" y1="0" x2="50" y2="50" />
                                <line x1="50" y1="0" x2="0" y2="50" />
                            </motion.svg>
                        </motion.li>
                        <span className={styles.descricao}>Arquivos complementares disponíveis para download</span>
                        <motion.li className={styles.li}>
                            <a href={`images/0.png`} download={`curriculoGusHolz`} target='_blank'>
                                <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className={styles.infos}>Sobre</motion.h2>
                            </a>
                        </motion.li>
                        <motion.li className={styles.li}>
                            <a href={`images/0.png`} download={`curriculoGusHolz`} target='_blank'>
                                <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className={styles.infos}>FAQ</motion.h2>     
                            </a>
                        </motion.li>
                        <motion.li className={styles.li}>
                            <a href={`images/0.png`} download={`curriculoGusHolz`} target='_blank'>
                                <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className={styles.infos}>Currículo</motion.h2>
                            </a>     
                        </motion.li>
                    </ul>
                </nav>     
            </>
        );
    }else{
        jsx = (
            <div className={styles.container}>
                <span className={menuVisivel? `${styles.menu}`: `${styles.menuDesabilitado}`}></span>
                <nav className={styles.menuNav}>
                    <ul className={styles.lista}>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                            <svg onClick={showMenu} className={styles.menuHamburguer} viewBox="0 0 100 80" >
                                <rect width={tamanhoSvg} height={tamanhoSvg/10}></rect>
                                <rect y="30" width={tamanhoSvg} height={tamanhoSvg/10}></rect>
                                <rect y="60" width={tamanhoSvg} height={tamanhoSvg/10}></rect>
                            </svg>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                            <Link target={"_blank"} href="https://github.com/gusholz"><img className={styles.images} src={`images/githubIcon.svg`}></img></Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                            <Link target={"_blank"} href="https://www.linkedin.com/in/gustavo-holzmann-771781175/"><img className={styles.images} alt="" src={`images/linkedinIcon.svg`}></img></Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                            <a href="mailto:gustavobarretohv@live.com?subject=Contato%20para%20fins%20comerciais%2Fprofissionais" target={"_blank"}><img className={styles.images} alt="" src={`images/emailIcon.svg`}></img></a>
                        </motion.li>
                    </ul>
                </nav>
            </div>
    )}
    
    return(
        jsx
    );
}

