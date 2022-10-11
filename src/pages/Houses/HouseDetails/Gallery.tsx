import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
type Props = {
  gallery: any;
}; // This only needs to be imported once in your app

const Gallery = ({ gallery }: Props) => {
  const [photoIndex, setPhotoIndex] = useState<any>(0);
  const [isOpen, setIsOpen] = useState(false);

  const images: any = gallery.map(
    (image: string) => `http://localhost:5000/gallery/${image}`
  );

  return (
    <>
      {/* Gallery */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      <div className="gallery bg-white p-10">
        <div className="title mb-6">
          <h3 className="text-2xl font-bold mt-3">Galleries</h3>
          <span className="w-10 h-1 bg-success block"></span>
        </div>
        <div className="images">
          <ul className="flex-col sm:flex-row flex gap-1 items-center">
            {images?.map((item: any, index: number) => (
              <li className="cursor-pointer" key={index}>
                <img
                  src={item ? item : "https://placeimg.com/400/225/arch"}
                  className="h-60"
                  alt=""
                  onClick={() => setIsOpen(true)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Gallery;
