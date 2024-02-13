import Tag from "../Tag/Tag";
import "./InfosLogement.scss";

function InfosLogement({logement}) {

    return (
        <div className="infosLogement">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            {logement.tags && (
                <span className="listeTags">
                    {logement.tags.map((tagTmp, index) => (
                        <Tag
                            key={index}
                            tag={tagTmp}
                        />
                    ))}
                </span>
            )}
        </div>
    );
}

export default InfosLogement;
