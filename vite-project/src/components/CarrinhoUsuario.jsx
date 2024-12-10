import React from 'react';

export default function CarrinhoUsuario({
    cartCourses,
    deletarPratoDoCarrinho,
    totalAmountCalculationFunction,
    setCartCourses,
}) {
    return (
        <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
            <h2>Meu Carrinho</h2>
            {cartCourses.length === 0 ? (
            <p className="empty-cart">O seu carrinho está vazio.</p>
            ) : (
        <div>
            <ul>
                {cartCourses.map((item) => (
                    <li key={item.product.id} className="cart-item">
                        <div>
                            <div className="item-info">
                                <div className="item-image">
                                    <img src={item.product.image} 
                                        alt={item.product.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.product.name}</h3>
                                    <p>Preço: R${item.product.price}</p>
                                </div>
                            </div>
                            <div>
                                <div className="item-actions">
                                    <button
                                        className="remove-button"
                                        onClick={() => 
                                        deletarPratoDoCarrinho(item.product)}>
                                        Remover Item
                                    </button>
                                    <div className="quantity">
                                        <button style={{ margin: "1%" }} 
                                            onClick={(e) => {
                                            setCartCourses((prevCartCourses) => {
                                                const updatedCart = prevCartCourses.map(
                                                (prevItem) =>
                                                prevItem.product.id === item.product.id
                                                        ? { ...prevItem, quantity: 
                                                        item.quantity + 1 }
                                                        : prevItem
                                                );
                                                return updatedCart;
                                            })
                                        }}>+</button>
                                        <p className='quant'>{item.quantity} </p>
                                        <button 
                                            onClick={(e) => {
                                            setCartCourses((prevCartCourses) => {
                                                const updatedCart = prevCartCourses.map(
                                                (prevItem) =>
                                                prevItem.product.id === item.product.id
                                                        ? { ...prevItem, quantity:
                                                        Math.max(item.quantity - 1, 0) }
                                                        : prevItem
                                                );
                                                return updatedCart;
                                            })
                                        }}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="checkout-section">
                <div className="checkout-total">
                    <p className="total">Custo Total: 
                        R${totalAmountCalculationFunction()}
                    </p>
                </div>
                <button
                    className="checkout-button"
                    disabled={cartCourses.length === 0 || 
                    totalAmountCalculationFunction() === 0}
                >
                    Finalizar Pagamento
                </button>
            </div>
        </div>
                    )}
        </div>
    );
}