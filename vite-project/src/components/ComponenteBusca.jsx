
import React from 'react';

function ComponenteBusca({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Cardápio Feito para Você!</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Procure pelo prato perfeito para você..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}

export default ComponenteBusca;