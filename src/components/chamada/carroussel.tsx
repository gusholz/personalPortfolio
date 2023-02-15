import { motion } from "framer-motion";
import React from "react";
import styles from "./carroussel.module.css";


  export default function Carousel(){
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
                transition={{duration:0.2, type:'spring'}}
                className={`${styles.imgs}`} 
                src={`images/0.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}
                className={styles.imgs} 
                src={`images/1.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/2.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={`${styles.imgs}`} 
                src={`images/3.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}
                className={styles.imgs} 
                src={`images/5.jpg`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}
                className={styles.imgs} 
                src={`images/6.jpg`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/7.png`}>
            </motion.img>
            <motion.img 
                initial={{opacity:0.5}}
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/8.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}} 
                transition={{duration:0.6, type:'spring'}} 
                className={styles.imgs} 
                src={`images/5.jpg`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/6.jpg`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/7.png`}>
            </motion.img>
            <motion.img
                initial={{opacity:0.5}} 
                whileHover={{rotate:6, opacity :1}}
                whileTap={{scale:0.9}}
                transition={{duration:0.6, type:'spring'}}  
                className={styles.imgs} 
                src={`images/8.png`}>
            </motion.img>
        </motion.div>
    );
  };
  

  
  
  
  
  