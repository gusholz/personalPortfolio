import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Plataforma de divugação Científica"}
            subtitulo={"Wireframe de alta fidelidade criado em Curso de UX"}
            srcImg={`images/screenshotDivug.png`}
            link={`https://www.figma.com/proto/CIX5OwCjkdUdlJjLoBrKAN/IdentidadeVisual?node-id=112%3A62&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=112%3A62`}
            guiaLink={'O link do protótipo utilizável está logo abaixo'}
        >
            Tive a grande oportunidade de participar do curso de Experiência de Usuário do Instituto Atlântico, e nele, minha equipe de 8 integrantes
            tomou a difícil decisão de desenvolver um sistema web. Vale destacar que isso foi decidido a partir da nossa análise de dados, oriunda das
            nossas múltiplas entrevistas com divulgadores científicos de todo o Brasil. Foi decididamente complexo desenvolver tantas páginas e subpáginas,
            mas creio que o resultado final e o processo foi extremamente rico.
        </PaginaTrab>
)}