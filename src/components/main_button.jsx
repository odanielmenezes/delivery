import React from "react";
import Button from "../assets/MainButton.png"
import Styled from "../styles/components/main_button";

export function MainButton() {
    return (
        <Styled>
            <div className="button">
                <img src={Button} alt="Botão Principal" />
            </div>
        </Styled>
    )
}