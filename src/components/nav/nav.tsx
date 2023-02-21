import { motion } from "framer-motion";
import Link from "next/link";
import { use, useState } from "react";
import styles from './nav.module.css'

export default function Nav(): JSX.Element{


    const [menuVisivel,setMenuVisivel] = useState(false);

    const handleClick = () =>{
        setMenuVisivel(!menuVisivel);
    }

    const menuVariants = {
        hidden: { x: "-40%" },
        visible: { x: "100%" },
    };

    
    
    return (
        <div className={styles.container}>
                <nav className={styles.menuNav}>
                    <ul className={styles.lista}>
                            <motion.div
                                className={styles.hamburguerMenu}
                                onClick={handleClick}
                                initial={{ rotate: 0, opacity: 0.5, x:1000 }}
                                animate={{ rotate: menuVisivel ? 180 : 0, opacity: 1, x:0}}
                                whileHover={{ scale: 1.2 }}
                                style={{ height: "150px" }}
                            >
                                <motion.span
                                    className={styles.hamburguerMenuBar1}
                                    initial={{ opacity:1 }}
                                    animate={{ opacity: !menuVisivel ? 1 : 0 }}
                                    transition={{ type: "tween", duration: 0.1 }}
                                    onClick={handleClick}
                                />
                                <motion.span
                                    className={styles.hamburguerMenuBar2}
                                    initial={{ opacity:1 }}
                                    animate={{ opacity: !menuVisivel ? 1 : 0 }}
                                    transition={{ type: "tween", duration: 0.1 }}
                                    onClick={handleClick}
                                />
                                <motion.span
                                    className={styles.hamburguerMenuBarTransition}
                                    initial={{ rotate: 0, }}
                                    animate={{ rotate: menuVisivel ? 45 : 0 }}
                                />
                                <motion.span
                                    className={styles.hamburguerMenuBarTransition}
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: menuVisivel ? -45 : 0 }}
                                />
                            </motion.div>
                            <motion.div 
                                className={styles.menuLinks}
                                variants={menuVariants}
                                initial="hidden"
                                animate={!menuVisivel ? "visible" : "hidden"}
                                transition={{ type: "tween", duration: 0.3 }}
                            >
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
                                <span className={styles.descricao}>Arquivos complementares disponíveis para download</span>
                            </motion.div>
                            <motion.li animate={menuVisivel ? "visible" : "hidden"} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                                <Link target={"_blank"} href="https://github.com/gusholz"><img className={styles.images} src={`images/githubIcon.svg`}></img></Link>
                            </motion.li>
                            <motion.li animate={menuVisivel ? "visible" : "hidden"} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                                <Link target={"_blank"} href="https://www.linkedin.com/in/gustavo-holzmann-771781175/"><img className={styles.images} alt="" src={`images/linkedinIcon.svg`}></img></Link>
                            </motion.li>
                            <motion.li animate={menuVisivel ? "visible" : "hidden"} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={styles.li}>
                                <a href="mailto:gustavobarretohv@live.com?subject=Contato%20para%20fins%20comerciais%2Fprofissionais" target={"_blank"}><img className={styles.images} alt="" src={`images/emailIcon.svg`}></img></a>
                            </motion.li>
                    </ul>
                </nav>
            </div>
    )
}

