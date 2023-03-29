import { useNavigate } from 'react-router-dom';

function Products({ product }) {

    const Navigate = useNavigate();

    function Nav() {
        Navigate(`/info/${product.id}`)
    }

    return (
        <div className='products__div'>
            <img src={product.imgPath} alt="" />
            <h4>{product.title}</h4>
            <button onClick={ Nav }>Ver mais</button>
        </div >
    )
}

export default Products;