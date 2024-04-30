import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtCategory = () => {
  const [category, setCategory] = useState([]);
  const cat = category;
  console.log(category, cat);
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    fetch("https://painting-drawing-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <div className="mt-24">
      <h1
        className="text-center text-3xl lg:text-5xl font-bold text-orange-500 "
        data-aos="fade-right"
      >
        {" "}
        Art & Craft Categories
      </h1>

      <Link to={"/category"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-6 mt-24">
          {category.map((c) => (
            <div
              key={c._id}
              className="card bg-base-100 shadow-xl relative"
              data-aos="fade-up"
            >
              <figure>
                <img
                  src={c.image}
                  alt="img"
                  className=" h-[300px] lg:h-[350px] w-full"
                />
              </figure>
              <div className="card-body">
                <h1>
                  <span className="text-3xl font-bold">{c.item_name}</span>
                </h1>
                <h2 className="card-title">
                  Subcategory :{" "}
                  <span className="text-green-400">{c.subcategory_name}</span>
                </h2>
                <p>{c.short_description}</p>
                <h3>
                  Rating:{" "}
                  <span className="font-bold text-xl text-red-500">
                    {c.rating}
                  </span>
                </h3>

                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ArtCategory;
