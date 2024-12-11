import { useState } from 'react'
import '../css/Cardapio.css'
import '../components/Navegacao.jsx'
import ComponenteBusca from '../components/ComponenteBusca.jsx'
import ExibirPratos from '../components/ExibirPratos.jsx'
import CarrinhoUsuario from '../components/CarrinhoUsuario.jsx'
// import { pratosBanco } from '../backend/pratos_banco.js'


function Cardapio() {

  const [pratos, setPratos] = useState([]);

const [pratosCarrinho, setPratosCarrinho] = useState([]);
const [searchCourse, setSearchCourse] = useState('');

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
                    total + item.product.price * item.quantity, 0);
};

const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
};

const filterCourseFunction = pratos.filter((course) =>
    course.nome.toLowerCase().includes(searchCourse.toLowerCase())
);


  return (
    <>
              <div className="App">
            <ComponenteBusca searchCourse={searchCourse} 
                            courseSearchUserFunction=
                                {courseSearchUserFunction} />
            <main className="App-main">
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
