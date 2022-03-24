import './Navbar.css'
import propertyLogo from '../images/property-logo.png'
export default function Navbar() {
    return (
        <div className='navbar-main-body'>
            <div className='navbar-main-body-top'>
                <div className='navbar-logo-container'>
                    <img
                        src={propertyLogo}
                        alt='property-logo'
                        className='property-logo-image'>
                    </img>
                </div>
                <div className='navbar-risk-management-container'>
                    <div className='risk-management-body'>
                        <div className='risk-management-text'>Need Risk Free Management?</div>
                        <div className='risk-management-btn'>CONTACT US</div>
                    </div>
                </div>
            </div>
            <div className='navbar-main-body-bottom'>
                <div className='navbar-item'>Property Management</div>
                <div className='navbar-item'>Property Search</div>
                <div className='navbar-item'>Body Corporate</div>
                <div className='navbar-item'>Commercial</div>
                <div className='navbar-item'>Waiheke Escapes</div>
                <div className='navbar-item'>FAQs & Contact Us</div>

            </div>
        </div>
    )
}