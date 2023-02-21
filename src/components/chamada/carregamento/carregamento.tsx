import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./carregamento.module.css"

export default function Carregamento(){

    const [blinking,setBlinking] = useState('Carregando.');
    const tempoEfeitoBlinking = 750;
    let verificador = 0;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(verificador === 1){
                setBlinking(`Carregando..`);
            }else if(verificador === 2){
                setBlinking(`Carregando...`);
            }else{
                setBlinking(`Carregando.`);
            }
            verificador++;
            if(verificador===3){
                verificador=0
            };
        }, tempoEfeitoBlinking);
      
        return () => clearInterval(interval);
      }, []);

    return(
        <div className={styles.container}>
            <motion.img
                initial={{ rotate: 0}}
                animate={{ rotate:360}}
                transition={{duration:4,type: "tween"}} 
                src={`images/flyingHead.png`}
                className={`${styles.imagemCarregamento}`}>
            </motion.img>
            <h2 className={styles.h2}>{blinking}</h2>
        </div>
    )
}