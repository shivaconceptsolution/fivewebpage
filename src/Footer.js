import { Link } from "react-router-dom"

export default function Footer()
{
    return(<div className="container-fulid bg-secondary">
          <div className="row">
            <div className="col-sm-4">
            <ul className="nav flex-column">
                 <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">About us</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact us</Link>
                    </li>

               </ul>
            </div>
            <div className="col-sm-4">
            <ul className="nav flex-column">
                 <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">About us</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact us</Link>
                    </li>

               </ul>
                </div>
                <div className="col-sm-4">
                <ul className="nav flex-column">
                 <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">About us</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact us</Link>
                    </li>

               </ul>
                </div>
          </div>
    </div>)
}