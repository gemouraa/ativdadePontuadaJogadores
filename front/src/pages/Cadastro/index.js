import FormularioCadastro from '../../components/FormularioCadastro';
import fundo from '../../assets/images/fundo.png';
import logo from '../../assets/images/logo.png';
import './styles.css';

function PaginaCadastro() {
    return (
        <div
            className="pagina-cadastro"
            style={{
                backgroundImage: `url(${fundo})`,
            }}
        >
            <div className="conteudo">
                <FormularioCadastro />
            </div>
        </div>
    );
}

export default PaginaCadastro;
