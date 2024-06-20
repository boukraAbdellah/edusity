import Title from "./Title";
import gallery_1 from "../assets/gallery-1.png";
import gallery_2 from "../assets/gallery-2.png";
import gallery_3 from "../assets/gallery-3.png";
import gallery_4 from "../assets/gallery-4.png";
import whiteArrow from "../assets/white-arrow.png";
import { useState } from "react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const images = [gallery_1, gallery_2, gallery_3, gallery_4];

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };
  return (
    <section className=" container ">
      <Title title={"Campus Photos"} subtitle={"Gallery"} />
      <div className=" flex justify-between items-center mx-auto my-[80px] w-[90%] ">
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            className=" basis-[23%]"
            onClick={() => openModal(image)}
          >
            <img src={image} alt="" className=" w-full rounded-lg cursor-pointer" />
          </div>
        ))}
      </div>
      <div className=" w-full flex items-center justify-center">
        <div className="cursor-pointer bg-primary py-3 px-6 rounded-full text-white text-lg   ">
          See more here{" "}
          <img
            src={whiteArrow}
            alt="dark arrow"
            className=" ml-2 inline w-6 h-3 "
          />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative" onClick={ (e) => e.stopPropagation() }>
            <img src={currentImage} alt="" className="w-full h-auto" />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-lg bg-black bg-opacity-60 h-8 w-8 rounded-full"
            >
              &larr;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-lg bg-black bg-opacity-60 h-8 w-8 rounded-full"
            >
              &rarr;
            </button>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
