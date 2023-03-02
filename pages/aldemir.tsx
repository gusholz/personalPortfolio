import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Site Portfólio Aldemir Martins"}
            subtitulo={"Meu primeiro site desenvolvido com HTML, CSS e JavaScript"}
            srcImg={`images/aldemir.webp`}
            link={`https://gusholz.github.io/sitePG3/`}
            guiaLink={'O site está disponível no link abaixo'}
        >
            Tive a chance de desenvolver meu primeiro Website, completamente via HTML, CSS e JavaScript
            como requisito de um projeto da disciplina Projeto Gráfico 3. O resultado foi extremamente educativo
            para mim, pois tive a oportunidade de aprender e implementar na prática - com todos os desafios de um
            projeto real com prazos reais- diversas questões que eu vinha estudando nos últimos meses acerca de
            desenvolvimento Web. Certos pormenores foram desafiadores no processo, como o uso do Flexbox, o trabalho
            com imagens e a responsividade, mas eles definitivamente serviram como um meio de praticar a utilização
            destes recursos tão fundamentais ao desenvolvimento web.
        </PaginaTrab>
)}