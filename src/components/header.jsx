import React from "react";
import Styled from "../styles/components/header"
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt, faInfoCircle, faMenu, faPizzaSlice, faImages, faCog} from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <Styled>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/"><FontAwesomeIcon icon={faHomeAlt}/> HOME</Link></li>
                        <li><Link to="/sobre"><FontAwesomeIcon icon={faInfoCircle}/> SOBRE</Link></li>
                        <li><Link to="/cardapio"><FontAwesomeIcon icon={faPizzaSlice}/> CARDÁPIO</Link></li>
                        <li><Link to="/galeria"><FontAwesomeIcon icon={faImages}/> GALERIA</Link></li>
                        <li><Link to="/faq"><FontAwesomeIcon icon={faCog}/> CONFIGURAÇÕES</Link></li>
                    </ul>
                </nav>
            </div>
        </Styled>
    )
}