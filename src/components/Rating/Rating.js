import "./Rating.scss";
import startFull from "../../assets/img/starFull.png";
import startEmpty from "../../assets/img/startEmpty.png";
import {useEffect, useState} from "react";

function Rating({nbEtoiles}) {
    const [starsResult, setStarsResult] = useState(null);

    useEffect(() => {
        let res = [];
        for (let i = 0; i < 5; i++) {
            let starTmp = {
                src: i < parseInt(nbEtoiles) ? startFull : startEmpty,
                key: i,
            }
            res.push(starTmp);
        }
        setStarsResult(res);
    }, []);

    return (
        <p id="rating">
            {starsResult && starsResult.length > 1 && (
                starsResult.map((starTmp) => (
                    <img key={starTmp.key} src={starTmp.src} alt=""/>
                ))
            )}
        </p>
    );
}

export default Rating;
