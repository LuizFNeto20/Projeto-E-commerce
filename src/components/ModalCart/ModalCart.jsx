import Itensinfo from '../ItensInfo/ItensInfo'
import ModalFinalizarCompra from '../ModalFinalizarCompra/ModalFinalizarCompra'
import './index.scss'
import { useNavigate } from 'react-router-dom';

function ModalCart({ data }) {

    const Navigate = useNavigate();

    function ContinuarComprando() {
        Navigate('/home');
    };

    function toggleForm(event) {
        const Modals = event.target.closest('.Modals');

        const modalCart = Modals.querySelector('.modal-cart');
        const modalForm = Modals.querySelector('.modal-form');

        modalCart.classList.toggle('display-none');
        modalForm.classList.toggle('display-none');
    }

    return (
        <div className="Modals">
            <div className='modal-cart'>
                <img src={data.imgPath} alt="" />
                <div>
                    <h2 className='My-cart'>Meu Carrinho</h2>
                    <Itensinfo title={data.title} price={data.price} colors={data.colors}></Itensinfo>
                    <button onClick={ContinuarComprando} className='Continue'>Continuar Comprando</button>
                    <button onClick={toggleForm} className='Finalizar'>Finalizar Compra</button>
                </div>
            </div>
            <div className='modal-form display-none'>
                <ModalFinalizarCompra></ModalFinalizarCompra>
            </div>
        </div>
    )
}

export default ModalCart