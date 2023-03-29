import "./index.scss"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import cardImg from '../assets/image 20.png'
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";

function Home({ data }) {

    return (
        <>
            <HeaderMenu homeInfo={true}></HeaderMenu>
            
            <div className="div">
                <img src={cardImg} alt="" className="div__ad" />
            </div>

            <div className="products">
                {
                    data.map((product) => {
                        return <Products key={product.id} product={product}></Products>;
                    })
                }
            </div>

            <Footer></Footer>
        </>
    )
}

export default Home;