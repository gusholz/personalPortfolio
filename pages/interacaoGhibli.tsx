import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Interação baseada na captação de som"}
            subtitulo={"Utilização do processing para finalidades interativas"}
            srcImg={`images/interacaoGhibli.webp`}
            link={`https://youtu.be/br3T6b-hGBk`}
            guiaLink={'Vídeo no youtube'}
        >
            Durante minha primeira bolsa, tive a oportunidade de desenvolver uma interação que, se utilizando da captação de som,
            movimentava as peças de pixel art na tela. Criei pensando em simular um efeito parallax, que era influenciado em tempo
            real pelo volume do som. Foi feito e planejado para ser utilizado em conjunto com a camerata de cordas da UFC, que na
            época, estava realizando vários concertos temáticos do Estúdio Ghibli.
        </PaginaTrab>
)}