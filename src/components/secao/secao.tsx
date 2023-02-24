import { motion } from 'framer-motion'
import styles from './secao.module.css'

export default function Sessao(props:{titulo:string,subtitulo:string,children:string,nomeGif:string,backgroundColor:boolean,subtitulo2:string}):JSX.Element{

    return (
        <div className={props.backgroundColor?`${styles.container}`:`${styles.container}`} >
            <section className={styles.secao}>
                <h2 className={styles.titulo}>
                    {props.titulo}
                </h2>
                <div className={styles.subContainer}>
                    <motion.img 
                        whileHover={{rotate:2}}
                        whileTap={{scale:0.9}}  
                        className={styles.gif} 
                        alt="" 
                        src={`images/${props.nomeGif}.gif`}>
                    </motion.img>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{duration:3}}>
                        <div className={styles.wrapper}>
                            <h3 className={styles.sub_titulo}>
                                {props.subtitulo}
                            </h3>
                            <motion.span initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{duration:8}}>
                                <h3 className={styles.sub_titulo_underline}>
                                    {props.subtitulo2}
                                </h3>
                            </motion.span>
                            <p className={styles.texto}>
                                {props.children}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}