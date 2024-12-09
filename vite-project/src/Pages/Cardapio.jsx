import { useState } from 'react'
import '../App.css'
import '../components/Navegacao.jsx'
import ComponenteBusca from '../components/ComponenteBusca.jsx'
import ExibirPratos from '../components/ExibirPratos.jsx'
import UserCartComponent from '../components/CarrinhoUsuario.jsx';
import CarrinhoUsuario from '../components/CarrinhoUsuario.jsx'


function Cardapio() {
  const [count, setCount] = useState(0)

  const [pratos, setPratos] = useState([
    { id: 1, 
    name: 'GFG T-shirt', 
    price: 499, 
    image: 
'https://static.scientificamerican.com/dam/m/4beab95014486f06/original/Tree-Swallow2.JPG?m=1714055470.635&w=600'
    },
    { id: 2, 
    name: 'GFG Bag', 
    price: 699, 
    image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
    },
    { id: 3, 
    name: 'GFG Hoodie', 
    price: 799, 
    image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
    }
]);

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
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
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
                    cartCourses={pratosCarrinho}
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
