import { useEffect, useState } from 'react'
import './App.css'
import './navbar.jsx'
import { db } from './firebase.js'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'
import Tarefas from './components/Tarefas.jsx'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [entrada, setEntrada] = useState('')
  console.log(entrada)
  
  const criarTarefa = async (e) => {
    e.preventDefault(e); //cria database 'tarefas' firebase caso ela não existir ainda 
    if(entrada === ''){
      alert("Por favor, insira uma tarefa válida.")
      return //esse return faz com que o código continue rodando
    }

    await addDoc(collection(db, 'tarefas'), {
      tarefa: entrada,
      completada: false,    //cria a tarefa e adiciona no servidor
    }) 
    setEntrada('') //esvazia o input
  }

  //Ler dados do Firebase
   useEffect(() => {
     const caminhoFirebase = query(collection(db, 'tarefas'))
     const snapshotDaDatabase = onSnapshot(caminhoFirebase, (querySnapshot) =>{
       let tarefasArray = []
       querySnapshot.forEach((doc) => {
         tarefasArray.push({...doc.data(), id: doc.id})
       });
       console.log("Dados do Firebase:", tarefasArray)
       setTarefas(tarefasArray)
     })
     return () => snapshotDaDatabase()
 }, [])

  const checarCompletada = async (tarefa) => {
    console.log("Função checarCompletada chamada para tarefa:", tarefa);
    try {
      await updateDoc(doc(db, 'tarefas', tarefa.id), {
        completada: !tarefa.completada 
      });
      console.log(`Tarefa ${tarefa.id} atualizada com sucesso.`);
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
    }
  };

  // DELETAR TAREFA

  const deletarTarefa = async (id) => {
    await deleteDoc(doc(db, 'tarefas', id))
  }


  return (
    <>
      <div className="background">
        <div className="container">
        <h3 className="header"> Aplicativo de Tarefas</h3>
        <form onSubmit={criarTarefa} className="form">
          <input 
            value={entrada} 
            onChange={(e) => setEntrada(e.target.value)} 
            className="input" 
            type="text" 
            placeholder="Adicionar Tarefa"
          />
          <button className="button">
          <i class='bx bx-plus-medical'></i>
          </button>
        </form>
        
        <ul>
          {tarefas.map((tarefa, index) => (
            <Tarefas 
              key={index} 
              tarefa={tarefa} 
              checarCompletada={checarCompletada}
              deletarTarefa={deletarTarefa}
            />
          ))}
        </ul>

        {tarefas.length < 1 
          ? null : //se tarefas < 1, n exibir codigo abaixo.
          <p className="contagem">{`Você tem ${tarefas.length} tarefas para fazer`}</p>
        }

        </div>
      </div>
    </>
  )
}

export default App
