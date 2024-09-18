import { useState } from "react";
import "./carousel.scss";
import ArrowLeft from "../../assets/ArrowLeft";
import ArrowRight from "../../assets/ArrowRight";


type CarouselProps= {
  data: string[],
  appartementName: string
}

const Carousel = ({ data, appartementName }: CarouselProps) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const showControls = data.length > 1;
  return (
    <div className="carousel">
      {showControls && (
        <button
          className="carousel-previous-button"
          onClick={() =>
            setCurrentImageIdx(
              currentImageIdx === 0 ? data.length - 1 : currentImageIdx - 1
            )
          }
        >
          <ArrowLeft />
        </button>
      )}
      <img
        src={data[currentImageIdx]}
        alt={`Image ${currentImageIdx + 1} de l'appartement ${appartementName}`}
        className={"image"}
      />
      {showControls && (
        <button
          className="carousel-next-button"
          onClick={() =>
            setCurrentImageIdx(
              currentImageIdx === data.length - 1 ? 0 : currentImageIdx + 1
            )
          }
        >
          <ArrowRight />
        </button>
      )}
      {showControls && (
        <span className="carousel-indicator">
          {`${currentImageIdx + 1} / ${data.length}`}
        </span>
      )}
    </div>
  );
};

export default Carousel;
