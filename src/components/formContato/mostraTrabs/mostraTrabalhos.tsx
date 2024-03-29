import { motion } from "framer-motion";
import Link from "next/link";
import styles from './mostraTrabalhos.module.css'

export default function MostraTrabs():JSX.Element{
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.h2}>Trabalhos Selecionados</h2>
                <h3 className={styles.h3}>Alguns dos meus trabalhos de desenvolvimento</h3>
                <div className={styles.trabalhos}>
                    <Link href={`/countdown`}>
                        <motion.img
                            whileHover={{rotate:6}} 
                            className={styles.images} 
                            alt="Screenshot de site com um contador grande na esquerda e personagem ilustrado na direita" 
                            src={`images/countdown.webp`}>
                        </motion.img>
                    </Link>
                    <Link href={`/aldemir`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="Screenshot de site com um peixe psicodélico ilustrado de Aldemir Martins na homepage" 
                            src={`images/aldemir.webp`}>
                        </motion.img>
                    </Link>
                    <Link href={`/divug`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="Screenshot de site com profissionais da área de divugação científica na homepage" 
                            src={`images/divug.webp`}>
                        </motion.img>
                    </Link>
                    <Link href={`/projetoConecto`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="Screenshot de site do projeto Co.necto, uma parceria entre o MIS-CE e a UFC" 
                            src={`images/projetoConecto.webp`}>
                        </motion.img>
                    </Link>
                    <Link href={`/interacaoGhibli`}>
                        <motion.img
                            whileHover={{rotate:6}}  
                            className={styles.images} 
                            alt="Screenshot de interação feita pelo processing. Duas crianças no mar em cima de um barco" 
                            src={`images/interacaoGhibli.webp`}>
                        </motion.img>
                    </Link>
                </div>
            </div>
        </>
)}