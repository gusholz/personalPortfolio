import Link from "next/link";

export default function MostraTrabalhos():JSX.Element{
    return (
        <>
            <h2>Trabalhos Selecionados</h2>
            <h3>Alguns dos meus trabalhos como desenvolvedor</h3>
            <div>
                <Link href={`/`}><img alt="" src=""></img></Link>
                <Link href={`/`}><img alt="" src=""></img></Link>
                <Link href={`/`}><img alt="" src=""></img></Link>
                <Link href={`/`}><img alt="" src=""></img></Link>
            </div>
        </>
)}