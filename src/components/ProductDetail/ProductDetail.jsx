import "./index.scss"
import Itensinfo from "../ItensInfo/ItensInfo";
import cart from "../../assets/shopping_cart.png";

function ProductDetail({ data, showModal }) {
    return (
        <div className="detail">
            <section className="detail__section">
                <div>
                    <img src={data.imgPath} alt="" />
                    <h4>{data.title}</h4>
                    <h3>Descrição</h3>
                    <p>Lorem ipsum dolor sit amet consectur</p>
                </div>
                <div className="detail__itens">
                    <Itensinfo title={data.title} price={data.price} colors={data.colors}></Itensinfo>
                    <button onClick={showModal}><img src={cart}/>Adicionar ao carrinho</button>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail;