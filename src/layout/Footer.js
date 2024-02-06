import logo from "../assets/img/logoFooter.png";
import "../styles/css/footer.css";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
