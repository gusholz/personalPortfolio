import styles from './sessao.module.css'

export default function Sessao(props:{titulo:string,subtitulo:string,children:string,nomeGif?:string}):JSX.Element{
    return (
        <div className={styles.sessao}>
            <h2>
                {props.titulo}
            </h2>
            <div>
                <img alt="" src={`images/${props.nomeGif}.gif`}></img>
                <h3>
                    {props.subtitulo}
                </h3>
                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}