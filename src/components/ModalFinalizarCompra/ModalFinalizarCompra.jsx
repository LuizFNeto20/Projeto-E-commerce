import './index.scss'
import { useNavigate } from 'react-router-dom';

function ModalFinalizarCompra() {

    const Navigate = useNavigate();

    function validarForm(event) {
        event.preventDefault();

        const form = event.target;

        const inputs = form.querySelectorAll("input");

        let camposVazios = true;

        inputs.forEach(input => {
            if (input.value === "") {
                if (input.nextSibling && input.nextSibling.nodeName === 'SPAN') {
                    camposVazios = false;
                    const span = input.nextSibling;

                    span.style.opacity = "1";
                }
            } else {
                const span = input.nextSibling;

                span.style.opacity = "0";
            }
        });

        const error = form.querySelector('#error');
        if (camposVazios) {
            Navigate("/home");
        } else {
            error.style.opacity = '1';
        }
    }

    return (
        <>
            <h1>Finalizar Compra:</h1>
            <form onSubmit={validarForm} className="form-modal" id="form">
                <label htmlFor="name">Digite seu nome:</label>
                <input type="text" id="name" name="name" placeholder="Nome Completo" autoComplete="off" />
                <span className='error-modal'>*Campo obrigatório*</span>

                <label htmlFor="cpf">Digite seu CPF:</label>
                <input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" autoComplete="off" />
                <span className='error-modal'>*Campo obrigatório*</span>

                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" placeholder="Av. xxxx, 555" autoComplete="off" />
                <span className='error-modal'>*Campo obrigatório*</span>

                <label htmlFor="pagamento">Forma de Pagamento:</label>
                <input type="text" id="pagamento" name="pagamento" placeholder="Dinheiro/cartão" autoComplete="off" />
                <span className='error-modal'>*Campo obrigatório*</span>

                <button type="submit" value="Cadastrar" id="cadastrar">Confirmar Pedido</button>
                <span id="error">*Preenche todos os campos*</span>
            </form>
        </>
    )
}

export default ModalFinalizarCompra;