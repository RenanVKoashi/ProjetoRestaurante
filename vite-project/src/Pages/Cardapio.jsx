import { useState } from 'react'
import '../css/Cardapio.css'
import '../components/Navegacao.jsx'
import ComponenteBusca from '../components/ComponenteBusca.jsx'
import ExibirPratos from '../components/ExibirPratos.jsx'
import CarrinhoUsuario from '../components/CarrinhoUsuario.jsx'
import { pratosBanco } from '../backend/pratos_banco.js'


function Cardapio() {
    const [pratos, setPratos] = useState(pratosBanco);
    const [pratosCarrinho, setPratosCarrinho] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");


    const adicionarPratoAoCarrinho = (Prato) => {
        const pratosRegistrados = pratosCarrinho
                            .find(item => item.product.id === Prato.id);
        if (pratosRegistrados) {
            const latestCartUpdate = pratosCarrinho.map(item =>
                item.product.id === Prato.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setPratosCarrinho(latestCartUpdate);
        } else {
            setPratosCarrinho([...pratosCarrinho, {product: Prato, quantity: 1}]);
        }
    };

    const deletarPratoDoCarrinho = (Prato) => {
        const updatedCart = pratosCarrinho
                            .filter(item => item.product.id !== Prato.id);
        setPratosCarrinho(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return pratosCarrinho
            .reduce((total, item) => 
                total + item.product.preco * item.quantity, 0)
            .toFixed(2); // Rounds to two decimal places
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = pratos.filter((course) =>
        course.nome.toLowerCase().includes(searchCourse.toLowerCase()) &&
        (categoriaSelecionada === "Todos" || course.categoria === categoriaSelecionada)
    );





    return (
        <>


            <div className="App">
                <ComponenteBusca searchCourse={searchCourse} 
                                courseSearchUserFunction={courseSearchUserFunction} />
                
                
                <main className="App-main">
                    <div className="abas">
                        {["Todos", "Jantar", "Bebida", "Sobremesa"].map((categoria) => (
                            <button
                            key={categoria}
                            className={`botao-abas ${categoriaSelecionada === categoria ? "ativo" : ""}`}
                            onClick={() => setCategoriaSelecionada(categoria)}
                            >
                            {categoria}
                            </button>
                        ))}
                    </div>

                    <ExibirPratos
                        pratos={pratos}
                        filterCourseFunction={filterCourseFunction}
                        adicionarPratoAoCarrinho={adicionarPratoAoCarrinho}
                    />

                    <CarrinhoUsuario
                        carrinhoPratos={pratosCarrinho}
                        deletarPratoDoCarrinho={deletarPratoDoCarrinho}
                        totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                        }
                        setCartCourses={setPratosCarrinho}
                    />
                    
                
                </main>
            </div>
        </>
    )
}

export default Cardapio;
