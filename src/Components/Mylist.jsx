import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import Aos from "aos";
import { Link } from "react-router-dom";

const Mylist = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);

  return (
    <div>
      hu
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-6 mt-24">
        {items.map((c) => (
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
              <div className="flex items-center w-full ">
                <h3 className="font-bold">
                  Price :
                  <span className="font-bold text-xl text-red-500">
                    {c.price}
                  </span>
                </h3>
                <p className="justify-end flex items-center font-bold">
                  Rating :
                  <span className="text-green-600 font-bold text-xl ">
                    {c.rating}
                  </span>
                </p>
              </div>
              <p className="bg-red-500 text-white w-24 flex items-center justify-center h-12 rounded-xl p-3 font-extrabold absolute top-0 left-0">
                {c.stock_status}
              </p>
              <p className="font-bold">
                Customization :{" "}
                <span className="text-red-600">{c.customize}</span>
              </p>
              <div className="card-actions justify-end mt-2">
                <Link to={`/update/${c._id}`}>
                  <button className="btn bg-green-500 text-white border-none">
                    Update
                  </button>
                </Link>
                <button className="btn bg-red-500 text-white border-none">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mylist;
