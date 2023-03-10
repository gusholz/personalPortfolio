import { useEffect, useState } from 'react'
import styles from './capa.module.css'
import { motion } from 'framer-motion'
import Carousel from './carrosel/carrossel';
import Carregamento from './carregamento/carregamento';


export default function Chamada(props:{children:string,subtitulo:string}):JSX.Element{

    const [blinking,setBlinking] = useState(props.subtitulo);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      setTimeout(() => setLoaded(true), 5000); // simulando tempo de carregamento
    }, []);
    
    //Tempo em milisegundos do efeito de digitando
    const tempoEfeitoBlinking = 750;
    let verificador = 0;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(verificador % 2 === 0){
                setBlinking(`${props.subtitulo}`);
            }else{
                setBlinking(`${props.subtitulo}|`);
            }
            verificador++;
            if(verificador === 100){
                verificador=0;
            }
        }, tempoEfeitoBlinking);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <div className={styles.container}>
                {!loaded ? <Carregamento /> : null}
                <Carousel/>
                <section className={styles.secao}>
                    <motion.div className={styles.subContainer}>
                        <h1 className={styles.h1}>{props.children}</h1>
                        <h2 className={styles.h2}>{blinking}</h2>
                    </motion.div>
                </section>
            </div>
    );
}