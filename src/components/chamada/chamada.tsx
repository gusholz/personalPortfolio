import styles from './chamada.module.css'

export default function Chamada(props:{children:string,subtitulo:string}):JSX.Element{
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{props.children}</h1>
            <h2 className={styles.h2}>{props.subtitulo}</h2>
        </div>
    )
}