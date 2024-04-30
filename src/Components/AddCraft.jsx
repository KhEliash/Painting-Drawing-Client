import { useContext, useEffect } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import swal from "sweetalert";
import Aos from "aos";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    Aos.init();
  }, []);

  const handleAddCart = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const itemName = form.items_name.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const name = form.name.value;
    const email = form.email.value;
    // const email  = user.email;
    const subcategory = form.subcategory.value;
    const customize = form.customize.value;
    const stock_status = form.stock_status.value;

    const item = {
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
    };
    // data fetch

    fetch("https://painting-drawing-server.vercel.app/addCraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal({
            text: "Inserted successfully",
            icon: "success",
          });
        }
      });
    console.log(item);
  };
  return (
    <div className="px-12">
      <div className="p-5 shadow-xl my-12 rounded-xl bg-base-200">
        <h1  data-aos="fade-right" className="text-center text-xl md:text-3xl w-full font-bold text-orange-500">
          Add Your items here..
        </h1>
        <form action="" onSubmit={handleAddCart}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Items Name</span>
              </label>
              <input
                type="text"
                name="items_name"
                placeholder="Items name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Items Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="number"
                name="processing_time"
                placeholder="Time"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Give your logged in Email"
                className="input input-bordered"
                defaultValue={user?.email}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <select
                className="select select-bordered w-full "
                name="subcategory"
              >
                <option disabled selected>
                  Select your category
                </option>
                <option>Landscape Painting</option>
                <option> Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option> Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="customize"
              >
                <option disabled selected>
                  Want to customize?
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="stock_status"
              >
                <option disabled selected>
                  Stock
                </option>
                <option>In stock</option>
                <option>Made to order</option>
              </select>
            </div>
          </div>

          <button className="btn w-full mt-3 bg-orange-500 text-white hover:text-orange-500">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
