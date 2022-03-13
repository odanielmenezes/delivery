import React from "react";
import Styled from "../styles/views/main"
import { Header } from "../components/header";
import MainLogo from "../assets/figma_principal.png"
import { MainButton } from "../components/main_button";

export function Main() {
    return (
        <Styled>
            <div className="main">
                <Header />
                <div className="principal">
                    <main className="conteudo">
                         <img src={MainLogo} alt="LogoPrincipal" className="logo_principal" />
                    </main>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><MainButton /></a>
                </div>
            </div>
        </Styled>
    )
}