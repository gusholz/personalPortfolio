import { motion } from "framer-motion";
import Link from "next/link";
import styles from './mostraTrabalhos.module.css'

export default function MostraTrabs():JSX.Element{
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.h2}>Trabalhos Selecionados</h2>
                <h3 className={styles.h3}>Alguns dos meus trabalhos de desenvolvimento de sites</h3>
                <div className={styles.trabalhos}>
                    <Link href={`/countdown`}>
                        <motion.img
                            whileHover={{rotate:6}} 
                            className={styles.images} 
                            alt="" 
                            src={`images/screenshot1countdown.png`}>
                        </motion.img>
                    </Link>
                    <Link href={`/aldemir`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="" 
                            src={`images/screenshotAldemir.png`}>
                        </motion.img>
                    </Link>
                    <Link href={`/divug`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="" 
                            src={`images/screenshotDivug.png`}>
                        </motion.img>
                    </Link>
                    <Link href={`/projetoConecto`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="" 
                            src={`images/screenshotProjetoConecto.png`}>
                        </motion.img>
                    </Link>
                </div>
            </div>
        </>
)}