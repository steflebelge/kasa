import {useParams} from 'react-router-dom'
import data from "../data/logements.json";
import {useEffect, useState} from "react";

function FicheLogement() {
    const [logementEnCours, setLogementEnCours] = useState(null);
    const {idLogement} = useParams();

    //recup data du logement au 1er render
    //si aucun logement avec cet id => error
    useEffect(() => {
        let res = data.find(logementTmp => logementTmp.id === idLogement);
        if (!res)
            window.location.href = window.location.origin + "/error";

        setLogementEnCours(res);
    }, []);

    return (
        (logementEnCours ? (
            <>
                <p>logement trouvé :</p>
                <p>{logementEnCours.id}</p>
                <p>{logementEnCours.title}</p>
                <p>{logementEnCours.cover}</p>
                <p>{logementEnCours.description}</p>
                <p>{logementEnCours.rating}</p>
                <p>{logementEnCours.location}</p>
            </>
        ) : (
            <p>logement non dispo</p>
        ))
    );
}

export default FicheLogement;
