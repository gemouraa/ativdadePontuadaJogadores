import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.png';
import fundo from '../../assets/images/fundo.png';

const TelaInicial = () => {
    const navigate = useNavigate();

    return (
        <div className="tela-inicial" style={{ backgroundImage: `url(${fundo})` }}>
            <div className="conteudo">
                <img src={logo} alt="Logo do Time" className="logo" />
                <h1>Bem-vindo ao Time!</h1>
                <p>Junte-se a nós e faça parte dessa equipe incrível.</p>
                <button className="botao-entrar" onClick={() => navigate('/cadastro')}>
                    Entrar para o Time
                </button>
            </div>
        </div>
    );
};

export default TelaInicial;
