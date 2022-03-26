import React from "react";
import { Header } from "../components/header";
import Styled from "../styles/views/sobre";
import TitleSobre from "../assets/title-sobre.png";
import Cozinheiro from "../assets/cozinheiro.jpg";

export function Sobre() {
  return (
    <Styled>
      <div className="container">
        <Header />
        <div className="response">
          <div className="conteudo-sobre">
            <div className="title">
              <img className="title-sobre" src={TitleSobre} alt="Title sobre" />
            </div>
            <div className="text-sobre">
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </p>
              <p>
                Ao contrário do que se acredita, Lorem Ipsum não é simplesmente
                um texto randômico. Com mais de 2000 anos, suas raízes podem ser
                encontradas em uma obra de literatura latina clássica datada de
                45 AC. Richard McClintock, um professor de latim do
                Hampden-Sydney College na Virginia, pesquisou uma das mais
                obscuras palavras em latim, consectetur, oriunda de uma passagem
                de Lorem Ipsum, e, procurando por entre citações da palavra na
                literatura clássica, descobriu a sua indubitável origem. Lorem
                Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et
                Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45
                AC. Este livro é um tratado de teoria da ética muito popular na
                época da Renascença. A primeira linha de Lorem Ipsum, "Lorem
                Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
              </p>
              <img src={Cozinheiro} alt="Equipe" />
              <p>
                Ao contrário do que se acredita, Lorem Ipsum não é simplesmente
                um texto randômico. Com mais de 2000 anos, suas raízes podem ser
                encontradas em uma obra de literatura latina clássica datada de
                45 AC. Richard McClintock, um professor de latim do
                Hampden-Sydney College na Virginia, pesquisou uma das mais
                obscuras palavras em latim, consectetur, oriunda de uma passagem
                de Lorem Ipsum, e, procurando por entre citações da palavra na
                literatura clássica, descobriu a sua indubitável origem. Lorem
                Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et
                Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45
                AC. Este livro é um tratado de teoria da ética muito popular na
                época da Renascença. A primeira linha de Lorem Ipsum, "Lorem
                Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
