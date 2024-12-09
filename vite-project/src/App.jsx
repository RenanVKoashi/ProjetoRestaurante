import { useState } from 'react'
import './App.css'
import './navbar.jsx'
import CollapsibleExample from './navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ComponenteBusca from './components/ComponenteBusca';
import ComponenteExibePratos from './components/ComponenteExibePratos';
import ComponenteCarrinho from './components/ComponenteCarrinho';


function App() {
  const [count, setCount] = useState(0)

  const [pratos, setPratos] = useState([
      { 
        id: 1, 
        nome: 'Pizza de Calabresa', 
        preco: 39.99, 
        imagem: 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'
      },
      { 
        id: 2, 
        nome: 'Hambúrguer Gourmet', 
        preco: 29.99, 
        imagem: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/burger2.jpg'
      },
      { 
        id: 3, 
        nome: 'Sundae de Chocolate', 
        preco: 19.99, 
        imagem: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/sundae3.jpg'
      }
    ]);

    const [carrinhoPratos, setCarrinhoPratos] = useState([]);
    const [buscaPrato, setBuscaPrato] = useState('');

    const adicionarPratoCarrinho = (pratoSelecionado) => {
        const pratoExistente = carrinhoPratos.find(item => item.produto.id === pratoSelecionado.id);

        if (pratoExistente) {
            const carrinhoAtualizado = carrinhoPratos.map(item =>
                item.produto.id === pratoSelecionado.id ? { 
                ...item, quantidade: item.quantidade + 1 } 
                : item
            );
            setCarrinhoPratos(carrinhoAtualizado);
        } else {
            setCarrinhoPratos([...carrinhoPratos, {produto: pratoSelecionado, quantidade: 1}]);
        }
    };

    const removerPratoCarrinho = (pratoSelecionado) => {
        const carrinhoAtualizado = carrinhoPratos
                            .filter(item => item.produto.id !== pratoSelecionado.id);
        setCarrinhoPratos(carrinhoAtualizado);
    };

    const calcularTotal = () => {
        return carrinhoPratos
            .reduce((total, item) => 
                        total + item.produto.preco * item.quantidade, 0);
    };

    const buscarPrato = (event) => {
        setBuscaPrato(event.target.value);
    };

    const pratosFiltrados = pratos.filter((prato) =>
        prato.nome.toLowerCase().includes(buscaPrato.toLowerCase())
    );

  return (
    <>
        <div className="App">
            <ComponenteBusca buscaPrato={buscaPrato} 
                            buscarPrato={buscarPrato} />
            <main className="App-main">
                <ComponenteExibePratos
                    pratos={pratos}
                    pratosFiltrados={pratosFiltrados}
                    adicionarPratoCarrinho={adicionarPratoCarrinho}
                />

                <ComponenteCarrinho
                    carrinhoPratos={carrinhoPratos}
                    removerPratoCarrinho={removerPratoCarrinho}
                    calcularTotal={calcularTotal}
                    setCarrinhoPratos={setCarrinhoPratos}
                />
            </main>
        </div>

    </>
  )
}

export default App
