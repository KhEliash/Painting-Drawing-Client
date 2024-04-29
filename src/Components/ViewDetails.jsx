import Aos from "aos";
import { useEffect, useState } from "react";
import { Flip } from "react-awesome-reveal";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  useEffect(() => {
    Aos.init({
      delay: 500,
    });
  }, []);
  const { id } = useParams();
  const [craft, setCraft] = useState({});
  // console.log(id, craft);
  const {
    itemName,
    image,
    description,
    price,
    rating,
    processing_time,
    name,
    email,
    subcategory,
    customize,
    stock_status,
  } = craft;
  useEffect(() => {
    fetch(`https://painting-drawing-server.vercel.app/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        // console.log(data);
      });
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row p-5 items-center gap-3">
      <div className="w-full lg:w-1/2  ">
        <Flip>
          <img
            src={image}
            alt="img"
            className="rounded-xl w-full h-[300px] lg:h-[400px]"
          />
        </Flip>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-50 p-5 rounded-xl  flex flex-col items-center justify-center ">
        <div className="space-y-2" data-aos="fade-up-left">
          <h1
            className="text-2xl md:text-3xl text-orange-500 font-bold"
            data-aos="fade-left"
          >
            {itemName}
          </h1>
          <p className="">
            <span className="font-bold text-green-400">Description :</span>{" "}
            {description}
          </p>
          <h1>
            <span className="font-bold text-green-400">Price :</span> {price} $
          </h1>
          <p>
            <span className="font-bold text-green-400">Rating :</span> {rating}
          </p>
          <p>
            <span className="font-bold text-green-400">Possessing Time : </span>
            {processing_time} days.
          </p>
          <h1>
            <span className="font-bold text-green-400">Name :</span> {name}
          </h1>
          <p>
            <span className="font-bold text-green-400">Email :</span> {email}
          </p>
          <p>
            <span className="font-bold text-green-400">Subcategory :</span>{" "}
            {subcategory}
          </p>
          <p>
            <span className="font-bold text-green-400">
              Want to customize? :
            </span>{" "}
            {customize}
          </p>
          <p>
            <span className="font-bold text-green-400">Stock status :</span>
            {stock_status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
