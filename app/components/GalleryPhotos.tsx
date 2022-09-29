import { useCallback, useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import foto10 from "~/images/gallery/foto-10.jpg";
import foto11 from "~/images/gallery/foto-11.jpg";
import foto12 from "~/images/gallery/foto-12.jpg";
import foto13 from "~/images/gallery/foto-13.jpg";
import foto14 from "~/images/gallery/foto-14.jpg";
import foto15 from "~/images/gallery/foto-15.jpg";
import foto16 from "~/images/gallery/foto-16.jpg";
import foto17 from "~/images/gallery/foto-17.jpg";
import foto18 from "~/images/gallery/foto-18.jpg";
import foto19 from "~/images/gallery/foto-19.jpg";
import foto2 from "~/images/gallery/foto-2.jpg";
import foto20 from "~/images/gallery/foto-20.jpg";
import foto21 from "~/images/gallery/foto-21.jpg";
import foto22 from "~/images/gallery/foto-22.jpg";
import foto23 from "~/images/gallery/foto-23.jpg";
import foto24 from "~/images/gallery/foto-24.jpg";
import foto25 from "~/images/gallery/foto-25.jpg";
import foto26 from "~/images/gallery/foto-26.jpg";
import foto27 from "~/images/gallery/foto-27.jpg";
import foto3 from "~/images/gallery/foto-3.jpg";
import foto4 from "~/images/gallery/foto-4.jpg";
import foto5 from "~/images/gallery/foto-5.jpg";
import foto6 from "~/images/gallery/foto-6.jpg";
import foto7 from "~/images/gallery/foto-7.jpg";
import foto8 from "~/images/gallery/foto-8.jpg";
import foto9 from "~/images/gallery/foto-9.jpg";
import TextWithLine from "./Utils/TextWithLine";

const photos = [
  {
    src: foto16,
    width: 5,
    height: 1,
  },
  {
    src: foto6,
    width: 1,
    height: 1,
  },
  {
    src: foto3,
    width: 2,
    height: 1,
  },
  {
    src: foto7,
    width: 1,
    height: 1,
  },
  {
    src: foto25,
    width: 2,
    height: 1,
  },
  {
    src: foto24,
    width: 1,
    height: 1,
  },
  {
    src: foto2,
    width: 1,
    height: 1,
  },
  {
    src: foto5,
    width: 2,
    height: 1,
  },
  {
    src: foto19,
    width: 5,
    height: 3,
  },
  {
    src: foto8,
    width: 3,
    height: 4,
  },
  {
    src: foto17,
    width: 3,
    height: 2,
  },
  {
    src: foto9,
    width: 3,
    height: 4,
  },
  {
    src: foto11,
    width: 3,
    height: 2,
  },
  {
    src: foto26,
    width: 3,
    height: 2,
  },
  {
    src: foto12,
    width: 3,
    height: 2,
  },
  {
    src: foto22,
    width: 3,
    height: 2,
  },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <div className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        <h4 className="mb-1"><TextWithLine>Momen Bahagia Kami</TextWithLine></h4>
      </div>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    source: x.src,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
