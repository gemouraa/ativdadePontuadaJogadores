import ListaDeJogadores from '../../components/ListaDeUsuarios';
import { useNavigate } from 'react-router-dom';
import fundo from '../../assets/images/fundo.png';
import logo from '../../assets/images/logo.png';
import './styles.css';

function PaginaListaJogadores() {
    const navigate = useNavigate();
    return (
        <div className='pagina-lista-usuarios' style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='content'>
                <img src={logo} alt="Logo do Time" className="logo" />
                <div className='container'>
                    <h2>Lista de Jogadores</h2>
                    <ListaDeJogadores />
                    <button onClick={() => navigate('/')} className='link-voltar'>
                        Voltar para Página Inicial
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaginaListaJogadores;
