
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
                    <div className="prato" key={product.id}>
                        <img src={product.image} alt={product.nome} />
                        <h2>{product.nome}</h2>
                        <p>Preço: R${product.price}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => adicionarPratoAoCarrinho(product)}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}