
import React from 'react';

export default function ExibirPratos({ pratos, 
    filterCourseFunction, 
    adicionarPratoAoCarrinho }) {
    return (
        <div className="product-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Não encontramos o prato que está procurando...
                </p>
            ) : (
                filterCourseFunction.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Price: ₹{product.price}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => adicionarPratoAoCarrinho(product)}
                        >
                            Add to Shopping Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}