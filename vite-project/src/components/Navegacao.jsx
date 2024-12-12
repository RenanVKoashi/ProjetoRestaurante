import React from "react";
import './navegacao.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="Site">NomePlaceHolder
            </a>
            <ul>
                <li>
                    <a href="./Cardapio">Cardápio</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
            </ul>
        </nav>
    )
}