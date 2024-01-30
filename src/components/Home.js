import "../styles/css/home.css";
import backgroundImgOne from "../assets/img/backgroundImgOne.png";
import CardLogement from "./CardLogement";
import data from "../data/logements.json";

function Home() {
    return (
        <section id={"home"}>
            <span style={{backgroundImage: `url(${backgroundImgOne})`}}>
                <p>Chez vous, partout et ailleurs</p>
            </span>
            <div id="listeLogements">
                {data.map((logementTmp) => (
                    <CardLogement
                        key={`${logementTmp.id}`}
                        id={`${logementTmp.id}`}
                        title={`${logementTmp.title}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;

