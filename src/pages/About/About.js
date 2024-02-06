import backgroundImgTwo from "../../assets/img/backgroundImgTwo.png";
import "./about.scss";
import ListeDeroulante from "../../components/ListeDeroulante/ListeDeroulante";

function About() {
    let contenu = [
        "Wi-fi",
        "Cuisine équipée",
        "Télévision",
        "Sèche Cheveux"
    ];

    return (
        <section id="about">
            <img src={backgroundImgTwo} alt=""/>
            <ListeDeroulante
                title={"FIabilité"}
                isOpen={false}
                contenu={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]}
            />
            <ListeDeroulante
                title={"Respect"}
                isOpen={false}
                contenu={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}
            />
            <ListeDeroulante
                title={"Service"}
                isOpen={false}
                contenu={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}
            />
            <ListeDeroulante
                title={"Sécurité"}
                isOpen={false}
                contenu={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}
            />
        </section>
    );
}

export default About;
