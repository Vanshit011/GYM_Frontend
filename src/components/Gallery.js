import React from "react";
import Image  from "../assests/img1.webp";
import Image2  from "../assests/img2.jpg";
import Image3  from "../assests/img3.jpg";
import Image4  from "../assests/img4.jpg";
import Image5  from "../assests/img5.jpg";
import Image6  from "../assests/img6.jpg";
import Image7  from "../assests/img7.jpg";
import Image8  from "../assests/img8.jpg";

const Gallery = () => {
  const gallery = [
    Image, Image2, Image3,Image4,Image5,Image6,Image7,Image8
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;