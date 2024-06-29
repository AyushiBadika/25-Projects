import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetchImages(url, limit) {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=10`
      );
      //   https://picsum.photos/v2/list?page=1&limit=10
      const result = await response.json();
      // console.log(result);
      if (result) {
        setImages(result);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        setError(error);
      }
    }
  }

  console.log(images);
  useEffect(() => {
    fetchImages();
  }, [url, limit]);

  function handlePrev(index) {
    if (index === 0) index = images.length - 1;
    setCurrentSlide(index - 1);
  }
  function handleNext(index) {
    if (index === images.length - 1) index = 0;
    setCurrentSlide(index + 1);
  }

  return (
    <div className="w-full h-full flex justify-center py-20">
      <div className="flex relative w-1/2 ">
        <FaArrowCircleLeft
          onClick={() => handlePrev(currentSlide)}
          className="absolute left-2 top-1/2 text-xl fill-white"
        />
        <div className="flex  ">
          {images && images.length > 0
            ? images.map((image, index) => {
                return (
                  <img
                    className={`${
                      currentSlide === index ? "block" : "hidden"
                    } rounded-md`}
                    key={image.id}
                    src={image.download_url}
                    alt={image.author}
                  />
                );
              })
            : loading
            ? "Loading..."
            : error}
        </div>
        <FaArrowCircleRight
          onClick={() => handleNext(currentSlide)}
          className="absolute right-2 top-1/2 text-xl fill-white"
        />
      </div>
    </div>
  );
}
