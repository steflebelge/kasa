import {useEffect, useState} from "react";
import "./Slider.scss";

function Slider(props) {
    const [slideIndex, setSlideIndex] = useState(props.slideIndex);
    const photos = useState(props.photos)[0];

    useEffect(() => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (slideIndex === null || slides.length === 0)
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
        slides[slideIndex - 1].style.display = "block";
    }, [slideIndex]);

    return (
        <div className="slider">
            {photos.map((picTmp, index) => (
                <div key={index} className="mySlides fade">
                    {photos.length > 1 && (
                        <div className="numbertext">{slideIndex} / {photos.length}</div>
                    )}

                    <img src={picTmp}/>
                </div>
            ))}
            {photos.length > 1 && (
                <>
                    <a className="prev" onClick={() => setSlideIndex(slideIndex - 1)}>❮</a>
                    <a className="next" onClick={() => setSlideIndex(slideIndex + 1)}>❯</a>
                </>
            )}
        </div>
    );
}

export default Slider;
