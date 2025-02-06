import './Navbar.css'
import logoimg from '../../assets/images/Frame 1.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="alamin-nav">
        <div className="container">
            <div className="main-nav">
            <div className="logo">
                <img src={logoimg} alt="Logo-img" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>How it Works</Link></li>
                    <li><Link>Help</Link></li>
                    <li><Link>Hire Bike</Link></li>
                </ul>
            </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar