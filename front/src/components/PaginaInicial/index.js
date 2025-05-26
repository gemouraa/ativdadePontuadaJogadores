import React from 'react';

const PaginaInicial = () => {
    const handleButtonClick = (buttonName) => {
        alert(`Você clicou no botão: ${buttonName}`);
    };

    return (
        <div className="pagina-inicial">
            <h1>Bem-vindo à Página Inicial</h1>
            <p>Esta é a página inicial do seu aplicativo.</p>
            <div className="botoes-container">
                <button
                    className="botao"
                    onClick={() => handleButtonClick('Botão 1')}
                >
                    Botão 1
                </button>
                <button
                    className="botao"
                    onClick={() => handleButtonClick('Botão 2')}
                >
                    Botão 2
                </button>
            </div>
        </div>
    );
};

export default PaginaInicial;