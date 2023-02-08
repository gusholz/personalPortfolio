import styles from './secao.module.css'

export default function Sessao(props:{titulo:string,subtitulo:string,children:string,nomeGif?:string,backgroundColor:boolean}):JSX.Element{

    return (
        <div className={props.backgroundColor?`${styles.container}`:`${styles.container2}`} >
            <section className={styles.secao}>
                <h2 className={styles.titulo}>
                    {props.titulo}
                </h2>
                <div className={styles.subContainer}>
                    <img alt="" src={`images/${props.nomeGif}.gif`}></img>
                    <div className={styles.wrapper}>
                        <h3 className={styles.sub_titulo}>
                            {props.subtitulo}
                        </h3>
                        <p className={styles.texto}>
                            {props.children}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}