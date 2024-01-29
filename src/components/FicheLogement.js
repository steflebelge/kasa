import { useParams } from 'react-router-dom'

function FicheLogement() {

    const { idLogement } = useParams()


    return (
        <h1>FicheLogement : {idLogement}</h1>
    );
}

export default FicheLogement;
