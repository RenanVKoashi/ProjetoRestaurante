import React from "react";
import './navegacao.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="Site">RestaPlate
            </a>
            <ul>
                <li>
                    <a href="./Cardapio">Cardápio</a>
                </li>
            </ul>
        </nav>
    )
}