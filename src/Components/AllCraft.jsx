import { Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const AllCraft = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <Slide>
        <h1 className="text-center my-5 text-xl lg:text-3xl text-orange-500 font-bold">
          Here is our all items collections
        </h1>
      </Slide>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="font-bold text-xl">
              <th>Photo</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>User name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}

            {crafts.map((c) => (
              <tr
                key={c._id}
                className="border-b-4 border-orange-300"
              >
                <td className="flex items-center justify-start">
                  <img
                    src={c.image}
                    alt="image"
                    className="w-2/3 h-24  lg:h-[250px] rounded-xl"
                  />
                </td>
                <td>
                  <h2 className="textarea-md lg:text-xl font-bold text-gray-500">
                    {c.itemName}
                  </h2>
                </td>
                <td>
                  <h2 className="font-bold text-gray-500">{c.price}</h2>
                </td>
                <td>
                  <h2 className="textarea-md lg:text-xl font-bold text-gray-500">
                    {c.name}
                  </h2>
                </td>
                <td>
                  <Link to={`/viewdetails/${c._id}`}>
                    <button className="btn  font-light bg-orange-500 text-white hover:text-orange-500">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
