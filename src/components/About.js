import backgroundImgTwo from "../assets/img/backgroundImgTwo.png";
import "../styles/css/about.css";
import ListeDeroulante from "./ListeDeroulante";

function About() {
    return (
        <section id="about">
            <img src={backgroundImgTwo} alt=""/>
            <ListeDeroulante
                title={"test"}
                isOpen={false}
                contenu={"lorem"}
            />
        </section>
    );
}

export default About;
