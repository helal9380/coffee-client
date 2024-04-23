/** @format */

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, _id, supplier, category, chefe, taste, details, photo } =
    coffee;
  console.log(coffee);

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chefe = form.chefe.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = { name, supplier, category, chefe, taste, details, photo };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Successfully update',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Okey'
              })
        }
    })
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] p-10 mt-5">
        <h2 className="text-2xl font-semibold mb-2">Add a Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          <div className="flex gap-5">
            <div className="w-1/2 space-y-5">
              <label className="input input-bordered flex items-center gap-2">
                Coffee Name
                <input
                defaultValue={name}
                  type="text"
                  name="coffeeName"
                  className="grow"
                  placeholder="Enter coffee name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Supplier
                <input
                defaultValue={supplier}
                  type="text"
                  name="supplier"
                  className="grow"
                  placeholder="Supplier"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Catagory
                <input
                 defaultValue={category}
                  type="text"
                  name="category"
                  className="grow"
                  placeholder="category"
                />
              </label>
            </div>
            <div className="w-1/2 space-y-5">
              <label className="input input-bordered flex items-center gap-2">
                Chefe
                <input
                defaultValue={chefe}
                  type="text"
                  name="chefe"
                  className="grow"
                  placeholder="Enter chefe"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Taste
                <input
                 defaultValue={taste}
                  type="text"
                  name="taste"
                  className="grow"
                  placeholder="Taste"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Details
                <input
                defaultValue={details}
                  type="text"
                  name="details"
                  className="grow"
                  placeholder="Detaisl your coffee"
                />
              </label>
            </div>
          </div>
          <label className="input mt-5 input-bordered flex items-center gap-2">
            Photo
            <input
            defaultValue={photo}
              type="text"
              name="photo"
              className="grow"
              placeholder="Phoro url"
            />
          </label>
          <button className="btn mt-5 btn-accent w-full">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
