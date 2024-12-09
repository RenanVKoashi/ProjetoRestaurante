import React from 'react';

function ComponenteExibePratos({ pratos, pratosFiltrados, adicionarPratoCarrinho }) {
    return (
        <div className="lista-pratos">
            {pratosFiltrados.length === 0 ? (
                <p className="nenhum-resultado">
                    Desculpe, não encontramos pratos correspondentes à sua busca.
                </p>
            ) : (
                pratosFiltrados.map((prato) => (
                    <div className="prato" key={prato.id}>
                        <img src={prato.imagem} alt={prato.nome} />
                        <h2>{prato.nome}</h2>
                        <p>Preço: R${prato.preco.toFixed(2)}</p>
                        <button
                            className="botao-adicionar-carrinho"
                            onClick={() => adicionarPratoCarrinho(prato)}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ComponenteExibePratos;