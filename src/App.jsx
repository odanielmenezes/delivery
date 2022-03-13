import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Main } from './views/main'
import { Orders } from './views/orders'
import { Sobre } from "./views/sobre";
import { Cardapio } from "./views/cardapio";
import { Galeria } from "./views/galeria";
import { Faq } from "./views/faq";
import "./styles/global.css"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
    )
}