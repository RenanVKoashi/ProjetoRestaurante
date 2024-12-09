import React from 'react';

function ComponenteBusca({ buscaPrato, buscarPrato }) {
    return (
        <header className="App-header">
            <h1>Cardápio Digital - Carrinho de Compras</h1>
            <div className="barra-busca">
                <input
                    type="text"
                    placeholder="Busque por pratos deliciosos..."
                    value={buscaPrato}
                    onChange={buscarPrato}
                />
            </div>
        </header>
    );
}

export default ComponenteBusca;