import {useParams} from 'react-router-dom'
import data from "../../data/logements.json";
import {useEffect, useState} from "react";
import ListeDeroulante from "../../components/ListeDeroulante/ListeDeroulante";
import "./FicheLogement.scss";
import startFull from "../../assets/img/starFull.png";
import startEmpty from "../../assets/img/startEmpty.png";

function FicheLogement() {
    const [logementEnCours, setLogementEnCours] = useState(null);
    const [slideIndex, setSlideIndex] = useState(null);
    const {idLogement} = useParams();

    //recup data du logement au 1er render
    //si aucun logement avec cet id => error
    useEffect(() => {
        let res = data.find(logementTmp => logementTmp.id === idLogement);
        if (!res)
            window.location.href = window.location.origin + "/error";

        setLogementEnCours(res);
        setSlideIndex(1);
    }, []);

    useEffect(() => {
        debugger
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if(slideIndex === null || slides.length === 0)
            return
        if (slideIndex > slides.length) {
            setSlideIndex(1);
            return
        }
        if (slideIndex < 1) {
            setSlideIndex(slides.length);
            return
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }, [slideIndex]);

    function renderRating() {
        let startsResult = [];
        for (let i = 0; i < 5; i++) {
            let starTmp = {
                src: i < parseInt(logementEnCours.rating) ? startFull : startEmpty,
                key: i,
            }
            startsResult.push(starTmp);
        }
        return startsResult;
    }

    return (
        <section id="ficheLogement">
            {logementEnCours ? (
                <>
                    <div className="slider">
                        {logementEnCours.pictures.map((picTmp, index) =>(
                            <div key={index} className="mySlides fade">
                                <div className="numbertext">{slideIndex} / {logementEnCours.pictures.length}</div>
                                <img src={picTmp}/>
                            </div>
                        ))}
                        <a className="prev" onClick={() => setSlideIndex(slideIndex - 1)}>❮</a>
                        <a className="next" onClick={() => setSlideIndex(slideIndex + 1)}>❯</a>
                    </div>

                    <div className="infosLogement">
                        <h1>{logementEnCours.title}</h1>
                        <p>{logementEnCours.location}</p>
                        {logementEnCours.tags && (
                            <span className="listeTags">
                                {logementEnCours.tags.map((tagTmp, index) => (
                                    <p className="tag" key={index}>{tagTmp}</p>
                                ))}
                            </span>
                        )}
                    </div>

                    <div className="infosLoueur">
                        <p>{logementEnCours.host.name}</p>
                        <img src={logementEnCours.host.picture} alt=""/>
                        <p id="rating">
                            {renderRating().map((starTmp) => (
                                <img key={starTmp.key} src={starTmp.src} alt=""/>
                            ))}
                        </p>
                    </div>

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
                </>

            ) : (
                <div className="loader"/>
            )}
        </section>
    );
}

export default FicheLogement;