import Link from "next/link";
import styles from './mostraTrabalhos.module.css'

export default function MostraTrabs():JSX.Element{
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.h2}>Trabalhos Selecionados</h2>
                <h3 className={styles.h3}>Alguns dos meus trabalhos de desenvolvimento de sites</h3>
                <div className={styles.trabalhos}>
                    <Link href={`/countdown`}><img className={styles.images} alt="" src={`images/screenshot1countdown.png`}></img></Link>
                    <Link href={`/countdown`}><img className={styles.images} alt="" src={`images/screenshot2countdown.png`}></img></Link>
                    <Link href={`/countdown`}><img className={styles.images} alt="" src={`images/screenshot1countdown.png`}></img></Link>
                    <Link href={`/countdown`}><img className={styles.images} alt="" src={`images/screenshot2countdown.png`}></img></Link>
                <h3 className={styles.despedida}>Até a próxima :)</h3>
                </div>
            </div>
        </>
)}