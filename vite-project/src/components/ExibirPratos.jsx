
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
                        <div className="prato-wrapper">
                            <img src={product.linkDaImagem} alt={product.nome} />
                        </div>
                        <h2>{product.nome}</h2>
                        <p>Preço: R${product.preco}</p>
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