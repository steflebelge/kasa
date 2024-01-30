import "../styles/css/home.css";
import backgroundImgOne from "../assets/img/backgroundImgOne.png";

function Home() {
    return (
        <section id={"home"}>
            <span style={{backgroundImage: `url(${backgroundImgOne})`}}>
                <p>Chez vous, partout et ailleurs</p>
            </span>

            <div id="listeLogements">
                <div className="cardLogement">
                    <p>text</p>
                </div>
            </div>
        </section>
    );
}

export default Home;

