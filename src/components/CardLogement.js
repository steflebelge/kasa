import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function CardLogement({id, title}) {

    function handleClick(id) {
        window.location.href = window.location.origin + "/ficheLogement/" + id;
    }

    return (
        <div
            onClick={() => handleClick(id)}
            className="cardLogement"
        >
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
