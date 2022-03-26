import React from "react";
import Button from "../assets/MainButton.png"
import Styled from "../styles/components/main_button";

export function MainButton(props) {
    return (
        <Styled>
            <div className="button">
                <a href={props.url} target="_blank" rel="noreferrer"><img src={Button} alt="Botão Principal" /></a>
            </div>
        </Styled>
    )
}