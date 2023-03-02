import { motion } from "framer-motion";
import React from "react";
import styles from "./carrossel.module.css";


  export default function Carrossel(){
    return (
        <motion.div 
            initial={{ x: 600 }}
            animate={{ x:100 }}
            transition={{duration:25,repeat:Infinity, repeatType:'mirror'}}
            className={`${styles.carousel} ${styles.slideLeft}`
        }> 
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/15.webp`}>
            </motion.img>
            <motion.img 
                initial={{opacity:0.5}}
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}} 
                transition={{duration:0.2, type:'spring'}}
                className={`${styles.imgs}`} 
                src={`images/1.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}
                className={styles.imgs} 
                src={`images/2.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/3.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/16.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={`${styles.imgs}`} 
                src={`images/4.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}
                className={styles.imgs} 
                src={`images/5.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}
                className={styles.imgs} 
                src={`images/6.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/13.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/7.webp`}>
            </motion.img>
            <motion.img 
                initial={{opacity:0.5}}
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/8.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}} 
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/9.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/10.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/11.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/14.webp`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/17.webp`}>
            </motion.img>
        </motion.div>
    );
  };
  

  
  
  
  
  