import LogoDNC from '../../assets/logo.png';
import Search from '../Search/Search';
import NavHeader from '../NavHeader/NavHeader';
import './index.scss'

function HeaderMenu({ homeInfo }) {
    return (
        <header className='header'>
            <img src={LogoDNC} alt="" className='header__logo'/>
            {
                homeInfo && <>
                    <Search></Search>
                    <NavHeader></NavHeader>
                </>
            }
        </header>
    )
}

export default HeaderMenu;