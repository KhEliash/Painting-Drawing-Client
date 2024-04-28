import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import Aos from "aos";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
 

const Mylist = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setControl(!control);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-center mt-12 flex justify-center items-center gap-2 text-2xl font-bold text-orange-500"><span className="bg-green-400 w-[8px] h-[40px] ml-2 rounded-full"></span><span  data-aos="fade-left">My add craft items</span></h1>
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
                <button
                  onClick={() => handleDelete(c._id)}
                  className="btn bg-red-500 text-white border-none"
                >
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

// fetch(`http://localhost:5000/delete/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount > 0) {
//           Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//           }).then((result) => {
//             if (result.isConfirmed) {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//               });
//               setControl(!control);
//             }
//           });

//         }
//     setItems(data);
//     });
