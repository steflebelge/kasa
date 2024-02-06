import "./listeDeroulante.scss";
import arrow from "../../assets/img/arrow.png";
import {useState} from "react";
import PropTypes from "prop-types";

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
            {isOpen && contenu && (
                contenu.map((contenuTmp, index) => (
                    <p className={"equipement"}
                       key={index}
                    >{contenuTmp}</p>
                ))
            )}
        </div>
    );
}

ListeDeroulante.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    contenu: PropTypes.array,
}

export default ListeDeroulante;
