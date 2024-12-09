import React from 'react';

function ComponenteCarrinho({
    carrinhoPratos,
    removerPratoCarrinho,
    calcularValorTotal,
    setCarrinhoPratos,
}) {
    return (
        <div className={`carrinho ${carrinhoPratos.length > 0 ? 'ativo' : ''}`}>
            <h2>Meu Carrinho</h2>
            {carrinhoPratos.length === 0 ? (
                <p className="carrinho-vazio">
                    Seu carrinho está vazio. Adicione pratos deliciosos!
                </p>
            ) : (
                <div>
                    <ul>
                        {carrinhoPratos.map((item) => (
                            <li key={item.prato.id} className="item-carrinho">
                                <div>
                                    <div className="informacoes-item">
                                        <div className="imagem-item">
                                            <img src={item.prato.imagem} 
                                                 alt={item.prato.nome} />
                                        </div>
                                        <div className="detalhes-item">
                                            <h3>{item.prato.nome}</h3>
                                            <p>Preço: R${item.prato.preco.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="acoes-item">
                                            <button
                                                className="botao-remover"
                                                onClick={() =>
                                                    removerPratoCarrinho(item.prato)
                                                }
                                            >
                                                Remover Prato
                                            </button>
                                            <div className="quantidade">
                                                <button
                                                    style={{ margin: "1%" }}
                                                    onClick={() => {
                                                        setCarrinhoPratos((prevCarrinho) => {
                                                            const carrinhoAtualizado = prevCarrinho.map(
                                                                (itemAntigo) =>
                                                                    itemAntigo.prato.id === item.prato.id
                                                                        ? {
                                                                              ...itemAntigo,
                                                                              quantidade: item.quantidade + 1,
                                                                          }
                                                                        : itemAntigo
                                                            );
                                                            return carrinhoAtualizado;
                                                        });
                                                    }}
                                                >
                                                    +
                                                </button>
                                                <p className="quant">{item.quantidade}</p>
                                                <button
                                                    onClick={() => {
                                                        setCarrinhoPratos((prevCarrinho) => {
                                                            const carrinhoAtualizado = prevCarrinho.map(
                                                                (itemAntigo) =>
                                                                    itemAntigo.prato.id === item.prato.id
                                                                        ? {
                                                                              ...itemAntigo,
                                                                              quantidade: Math.max(item.quantidade - 1, 0),
                                                                          }
                                                                        : itemAntigo
                                                            );
                                                            return carrinhoAtualizado;
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
                    <div className="secao-finalizar">
                        <div className="total-finalizar">
                            <p className="total">
                                Valor Total: R${calcularValorTotal().toFixed(2)}
                            </p>
                        </div>
                        <button
                            className="botao-finalizar"
                            disabled={carrinhoPratos.length === 0 || calcularValorTotal() === 0}
                        >
                            Finalizar Pedido
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ComponenteCarrinho;
