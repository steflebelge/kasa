import "./header.scss";
import logo from "../../assets/img/logo.png";
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation();

    return (
        <header>
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <Link className={location.pathname === "/"
                    ? "selected"
                    : ""} to="/">Accueil</Link>
                <Link className={location.pathname === "/About"
                    ? "selected"
                    : ""} to="/About">A propos</Link>
            </nav>
        </header>
    );
}

export default Header;
