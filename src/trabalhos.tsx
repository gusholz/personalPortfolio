import Nav from "./components/nav/nav"
import styles from "./trabalhos.module.css"
import '@nextcss/reset';
import Link from "next/link";
import { motion } from "framer-motion";

export default function PaginaTrab(props:{titulo:string,subtitulo:string, children:string,srcImg:string,link:string,guiaLink:string}){
    return (
        <div className={styles.container}>
            <Link href={"/"}>
                <motion.img
                    initial={{rotate:90}}
                    whileHover={{scale:1.2}}
                    whileTap={{scale:0.9}} 
                    className={styles.seta} 
                    alt="" 
                    src={`images/seta.webp`}>
                </motion.img>
            </Link>
            <Nav/>
            <section className={styles.secao}>
                <img className={styles.images} alt="" src={props.srcImg} />
                <div className={styles.subContainer}>
                    <h3 className={styles.titulo}>
                        {props.titulo}
                    </h3>
                    <h2 className={styles.subTitulo}>
                        {props.subtitulo}
                    </h2>
                    <p className={styles.texto}>
                        {props.children}
                    </p>
                    <span className={styles.span}>{props.guiaLink}</span>
                    <Link href={props.link} className={styles.link}>Ir para o site</Link>
                </div>
            </section>
        </div>
)}