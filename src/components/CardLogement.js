import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function CardLogement({id, title, cover}) {

    function handleClick(id) {
        window.location.href = window.location.origin + "/ficheLogement/" + id;
    }

    debugger
    return (
        <div
            onClick={() => handleClick(id)}
            className="cardLogement"
        >
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
