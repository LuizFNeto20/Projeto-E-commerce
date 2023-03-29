import './index.scss';
import logoFooter from '../../assets/Group 1025.png'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt="" />
            <h4>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas.
                Para mais informações, entre em contato: (011) 1111-2222</h4>
        </footer>
    )
}

export default Footer;