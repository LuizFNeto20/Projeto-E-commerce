import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ModalCart from "../components/ModalCart/ModalCart";
import './index.scss'

function ProductInformation({ data }) {

    const { productId } = useParams();
    const selectedProduct = data.find(product => productId == product.id);

    function showModal (event) {
        const root = event.target.closest('#root');

        const modalCart = root.querySelector('.modal');
        const divDetail = root.querySelector('.detail');

        divDetail.classList.add('background')
        modalCart.classList.add('active');
    }

    return (
        <>
            <HeaderMenu homeInfo={true}></HeaderMenu>
            <ProductDetail data={selectedProduct} showModal={showModal}></ProductDetail>
            <Footer></Footer>

            <div className="modal">
                <ModalCart data={selectedProduct}></ModalCart>
            </div>
        </>
    );
}

export default ProductInformation;