import PhotoAlbum from "react-photo-album";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const photos = [
    { src: "https://i.ibb.co/BBSp3m4/author.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/qM1zNB2/carton.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/7K9ddj5/carcoal.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/j8BSQSS/potrait.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/WtVCXF0/landscape.jpg", width: 1600, height: 900 },
  ];
  return (
    <div className="hidden md:block lg:block mt-24">
      <h1
        data-aos="fade-down"
        className="text-center text-4xl text-orange-500 font-extrabold my-24"
      >
        Gallery Showcase
      </h1>
      <div data-aos="fade-up">
        <PhotoAlbum layout="rows" photos={photos}  />;
      </div>
    </div>
  );
};

export default Gallery;
