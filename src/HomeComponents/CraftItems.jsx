import Aos from "aos";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CraftItems = () => {
  const crafts = useLoaderData();
  console.log(crafts);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-24">
      <h1
        className="text-center text-3xl lg:text-5xl font-bold text-orange-500 "
        data-aos="fade-down"
      >
        Crafted Creations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-6 mt-24">
        {crafts.slice(0, 6).map((c) => (
          <div
            key={c._id}
            className="card bg-base-100 shadow-xl relative"
            data-aos="fade-up"
          >
            <figure>
              <img src={c.image} alt="img" className="h-[300px] w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{c.itemName}</h2>
              <p>{c.description}</p>
              <h3>
                Price:{" "}
                <span className="font-bold text-xl text-red-500">
                  {c.price}
                </span>
              </h3>
              <p className="bg-red-500 text-white w-24 flex items-center justify-center h-12 rounded-xl p-3 font-extrabold absolute top-0 left-0">
                {c.stock_status}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/viewdetails/${c._id}`}>
                  <button className="btn bg-orange-500 text-white border-none">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
