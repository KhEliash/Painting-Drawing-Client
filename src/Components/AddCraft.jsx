import React from "react";

const AddCraft = () => {
  return (
    <div className="px-12">
      <div className="p-5 shadow-xl my-12 rounded-xl bg-base-200">
        <h1 className="text-center text-xl md:text-3xl font-bold text-orange-500">
          Add Your items here..
        </h1>
        <form action="">
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
                name="img"
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

            {/* right sight */}

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
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <select className="select select-bordered w-full ">
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
              <select className="select select-bordered w-full">
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
              <select className="select select-bordered w-full">
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
