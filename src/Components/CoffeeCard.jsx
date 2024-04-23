/** @format */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, _id, supplier, category, chefe, taste, details, photo } =
    coffee;

    console.log(coffee, coffees)
  const handleDelete = (_id) => {
    console.log(_id);

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex gap-5  border border-gray-300 p-4 rounded-lg">
        <div className="w-[200px] h-[200px]">
          <img
            className="w-full h-full rounded-lg" // Ensure the image takes up the full width and height of its container
            src={photo}
            alt="Coffee"
          />
        </div>
        <div className="flex flex-1 justify-between">
          <div className="text-start">
            <h2 className="">Name : {name}</h2>
            <p>Supplier : {supplier}</p>
            <p>Chefe : {chefe}</p>
            <p>Category : {category}</p>
            <p>Taste : {taste}</p>
            <p>Details : {details}</p>
          </div>
          <div className="">
            <div className="join join-vertical space-y-6">
              <button className="btn">Details</button>
              <Link to={`/updatedCoffee/${_id}`} className="btn">
                <button>Updated</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-500 text-white">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
