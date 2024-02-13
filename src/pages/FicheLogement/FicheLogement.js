import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import ListeDeroulante from "../../components/ListeDeroulante/ListeDeroulante";
import "./FicheLogement.scss";
import {fetchUrl} from "../../utils/tools"
import Slider from "../../components/Slider/Slider";
import InfosLogement from "../../components/InfosLogement/InfosLogement";
import InfosLoueur from "../../components/InfosLoueur/InfosLoueur";

function FicheLogement() {
    const [data, setData] = useState(null);
    const [logementEnCours, setLogementEnCours] = useState(null);
    const [slideIndex, setSlideIndex] = useState(null);
    const {idLogement} = useParams();
    const navigate = useNavigate();

    //recup data du logement au 1er render
    //si aucun logement avec cet id => error
    useEffect(() => {
        fetchUrl("/logements.json")
            .then(tmp => {
                setData(tmp);
            });
    }, []);

    useEffect(() => {
        if (data && !logementEnCours) {
            let res = data.find(logementTmp => logementTmp.id === idLogement);
            if (!res)
                navigate("/error");

            setLogementEnCours(res);
            setSlideIndex(1);
        }
    }, [data]);


    return (
        <section id="ficheLogement">
            {logementEnCours ? (
                <>
                    <Slider
                        photos={logementEnCours.pictures}
                        slideIndex={slideIndex}
                    />

                    <InfosLogement
                        logement={logementEnCours}
                    />

                    <InfosLoueur
                        hote={logementEnCours.host}
                        rating={logementEnCours.rating}
                    />

                    <span>
                        <div className="description">
                            <ListeDeroulante
                                isOpen={false}
                                title={"Description"}
                                contenu={[logementEnCours.description]}
                            />
                        </div>

                        <div className="equipement">
                            <ListeDeroulante
                                isOpen={false}
                                title={"Equipement"}
                                contenu={logementEnCours.equipments}
                            />
                        </div>
                    </span>
                </>

            ) : (
                <div className="loader"/>
            )}
        </section>
    );
}

export default FicheLogement;
