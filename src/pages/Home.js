import "../styles/css/home.css";
import backgroundImgOne from "../assets/img/backgroundImgOne.png";
import CardLogement from "../components/CardLogement";
import {useEffect, useState} from "react";
import data from "../data/logements.json";

function Home() {
    // const [data, setData] = useState(null);

    //au chargement de la page, on fetch le json pour revcuperer la data
    // useEffect(() => {
    //     fetch("/src/data/logements.json")
    //         .then(tmp => {
    //             debugger
    //         })
    //         .catch(err => {
    //             debugger
    //             window.location.href = window.location.origin + "/error";
    //         });
    // }, []);

    return (
        <section id={"home"}>
            <span style={{backgroundImage: `url(${backgroundImgOne})`}}>
                <p>Chez vous, partout et ailleurs</p>
            </span>
            <div id="listeLogements">
                {data ? (
                    data.map((logementTmp) => (
                        <CardLogement
                            key={`${logementTmp.id}`}
                            id={`${logementTmp.id}`}
                            title={`${logementTmp.title}`}
                            cover={`${logementTmp.cover}`}
                        />
                    ))
                ) : (
                    <p>Chargement ....</p>
                )}
            </div>
        </section>
    );
}

export default Home;

