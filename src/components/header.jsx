import React from "react";
import Styled from "../styles/components/header"
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt, faInfoCircle, faPizzaSlice, faImages, faCog } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <Styled>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <Link to="/"><li><FontAwesomeIcon icon={faHomeAlt}/> HOME</li></Link>
                        <Link to="/sobre"><li><FontAwesomeIcon icon={faInfoCircle}/> SOBRE</li></Link>
                        <Link to="/cardapio"><li><FontAwesomeIcon icon={faPizzaSlice}/> CARDÁPIO</li></Link>
                        <Link to="/galeria"><li><FontAwesomeIcon icon={faImages}/> GALERIA</li></Link>
                        <Link to="/faq"><li><FontAwesomeIcon icon={faCog}/> CONFIGURAÇÕES</li></Link>
                    </ul>
                </nav>
            </div>
        </Styled>
    )
}