import "../styles/css/listeDeroulante.css";
import arrow from "../assets/img/arrow.png";
import {useState} from "react";

function ListeDeroulante(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [title, setTitle] = useState(props.title);
    const [contenu, setContenu] = useState(props.contenu);

    return (
        <div className="listeDeroulante">
            <p onClick={() => setIsOpen(!isOpen)}>{title}
                {isOpen
                    ? (<img className={"reverse"} src={arrow} alt=""/>)
                    : (<img src={arrow} alt=""/>)
                }
            </p>
        </div>
    );
}

export default ListeDeroulante;
