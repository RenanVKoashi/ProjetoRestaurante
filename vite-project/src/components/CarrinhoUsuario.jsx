import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarrinhoUsuario({
    carrinhoPratos,
    deletarPratoDoCarrinho,
    totalAmountCalculationFunction,
    setCartCourses,
}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const navigate = useNavigate();


    return (
        <div className="cart-wrapper">
            <button className="carrinho-botao-abrir" onClick={toggleCart}>
                {isCartOpen ? <i className='bx bx-cart' ></i> : <i className='bx bxs-cart'></i>}
            </button>
            {isCartOpen && (
                <div className={`cart ${carrinhoPratos.length > 0 ? "active" : ""}`}>
                    <h2>Meu Carrinho</h2>
                    {carrinhoPratos.length === 0 ? (
                        <p className="empty-cart">O seu carrinho está vazio.</p>
                    ) : (
                        <div>
                            <div className="cart-items-container">
                                <ul>
                                    {carrinhoPratos.map((item) => (
                                        <li key={item.product.id} className="cart-item">
                                            <div>
                                                <div className="item-info">
                                                    <div className="item-image">
                                                        <img
                                                            src={item.product.linkDaImagem}
                                                            alt={item.product.nome}
                                                        />
                                                    </div>
                                                    <div className="item-details">
                                                        <h3>{item.product.nome}</h3>
                                                        <p>Preço: R${item.product.preco}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="item-actions">
                                                        <button
                                                            className="remove-button"
                                                            onClick={() =>
                                                                deletarPratoDoCarrinho(item.product)
                                                            }
                                                        >
                                                            Remover Item
                                                        </button>
                                                        <div className="quantity">
                                                            <button
                                                                style={{ margin: "1%" }}
                                                                onClick={() => {
                                                                    setCartCourses((prevCartCourses) => {
                                                                        const updatedCart = prevCartCourses.map(
                                                                            (prevItem) =>
                                                                                prevItem.product.id ===
                                                                                    item.product.id
                                                                                    ? {
                                                                                        ...prevItem,
                                                                                        quantity:
                                                                                            item.quantity + 1,
                                                                                    }
                                                                                    : prevItem
                                                                        );
                                                                        return updatedCart;
                                                                    });
                                                                }}
                                                            >
                                                                +
                                                            </button>
                                                            <p className="quant">{item.quantity}</p>
                                                            <button
                                                                onClick={() => {
                                                                    setCartCourses((prevCartCourses) => {
                                                                        const updatedCart = prevCartCourses.map(
                                                                            (prevItem) =>
                                                                                prevItem.product.id ===
                                                                                    item.product.id
                                                                                    ? {
                                                                                        ...prevItem,
                                                                                        quantity: Math.max(
                                                                                            item.quantity - 1,
                                                                                            0
                                                                                        ),
                                                                                    }
                                                                                    : prevItem
                                                                        );
                                                                        return updatedCart;
                                                                    });
                                                                }}
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="checkout-section">
                                <div className="checkout-total">
                                    <p className="total">
                                        Custo Total: R${totalAmountCalculationFunction()}
                                    </p>
                                </div>
                                <button
                                    className="checkout-button"
                                    disabled={
                                        carrinhoPratos.length === 0 ||
                                        totalAmountCalculationFunction() === 0
                                    }
                                    onClick={() => navigate("/pagamento")} // Redireciona ao clicar
                                >
                                    Finalizar Pagamento
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
