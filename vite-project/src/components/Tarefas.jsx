import React from "react";
// import {FaRegTrashAlt} from 'react-icons/fa';
import '../App.css'

const Tarefas = ( {tarefa, checarCompletada, deletarTarefa}) => {
    return(
        //abaixo checamos se a condição do firebase de tarefa é TRUE. mudando assim a classe.
        <li className={tarefa.completada ? "itensCompletado" : "itens"}>
            <div className="linha">
                <input type="checkbox" checked={tarefa.completada ? 'checked' : ''} onChange={() => checarCompletada(tarefa)}/>
                <p onClick={() => checarCompletada(tarefa)} className={tarefa.completada ? "textoCompletado" : "texto"}>
                    {tarefa.tarefa}
                </p>
            </div>
            <button onClick={() => deletarTarefa(tarefa.id)}><i class='bx bxs-trash'></i></button>
        </li>
    )
}

export default Tarefas