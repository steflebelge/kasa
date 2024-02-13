import PropTypes from 'prop-types'
import {Link, useNavigate} from 'react-router-dom'
import "./CardLogement.scss";

function CardLogement({id, title, cover}) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/ficheLogement/" + id)}
            className="cardLogement"
        >
            <span className="backLinear"></span>
            <img src={cover} alt=""/>
            <Link to={"/ficheLogement/" + id}>
                {title}
            </Link>
        </div>
    );
}

CardLogement.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
}


export default CardLogement;
