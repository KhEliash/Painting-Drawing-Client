import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateCraft = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState({});

  useEffect(() => {
    fetch(`https://painting-drawing-server.vercel.app/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        // console.log(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const itemName = form.items_name.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const subcategory = form.subcategory.value;
    const customize = form.customize.value;
    const stock_status = form.stock_status.value;

    const updateInfo = {
      itemName,
      image,
      description,
      price,
      rating,
      processing_time,
      subcategory,
      customize,
      stock_status,
    };
    // console.log(updateInfo);

    fetch(`https://painting-drawing-server.vercel.app/updateCraft/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            text: "Updated successfully",
            icon: "success",
          });
        } else {
          swal({
            text: "Please recheck your steps or Rewrite something",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="px-3 mx-5 lg:mx-0">
      
      <Slide>
      <h1 className="text-center text-3xl font-bold text-orange-500 mt-12">Update craft here</h1>
      </Slide>

      <div className="p-5 bg-base-200 rounded-xl mt-12">
        <form action="" onSubmit={handleUpdate}>
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
                defaultValue={craft.name}
                // required
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
                defaultValue={craft.image}
                // required
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
                defaultValue={craft.description}
                // required
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
                defaultValue={craft.price}
                // required
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
                defaultValue={craft.rating}
                // required
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
                defaultValue={craft.processing_time}
                // required
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
                {craft.subcategory}
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
                  {craft.customize}
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
                {craft.stock_status}
                </option>
                <option>In stock</option>
                <option>Made to order</option>
              </select>
            </div>
          </div>

          <button className="btn w-full mt-3 bg-orange-500 text-white hover:text-orange-500">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;
