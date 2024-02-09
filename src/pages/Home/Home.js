import "./home.scss";
import backgroundImgOne from "../../assets/img/backgroundImgOne.png";
import CardLogement from "../../components/CardLogement/CardLogement";
import {useEffect, useState} from "react";
import {fetchUrl} from "../../utils/tools";

function Home() {
    const [data, setData] = useState(null);

    //au chargement de la page, on fetch le json pour revcuperer la data
    useEffect(() => {
        fetchUrl("/logements.json")
            .then(tmp => {
                setData(tmp);
            });
    }, []);

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

