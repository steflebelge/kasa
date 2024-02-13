import Rating from "../Rating/Rating";
import "./InfosLoueur.scss";

function InfosLoueur({hote, rating}) {

    return (
        <div className="infosLoueur">
            <p>{hote.name}</p>
            <img src={hote.picture} alt=""/>
            <Rating
                nbEtoiles={rating}
            />
        </div>
    );
}

export default InfosLoueur;
