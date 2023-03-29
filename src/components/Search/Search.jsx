import logoCarrinho from '../../assets/image 19.png'
import iconeInput from '../../assets/Vector.png'

function Search() {

    return (
        <>
            <div className='header__div'>
                <img src={iconeInput} alt="" className='header__icon'/>
                <input className='header__input' type="text" placeholder='O que você está procurando?' />
            </div>
            <img src={logoCarrinho} alt=""  className='header__cart'/>
        </>
    )

}

export default Search;