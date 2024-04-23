/** @format */
import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chefe = form.chefe.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = { name, supplier, category, chefe, taste, details, photo };

    fetch("http://localhost:5000/addcoffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Successfully added',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Okey'
              })
        }
    })
  };
  return (
    <div className="bg-[#F4F3F0] p-10 mt-5">
      <h2 className="text-2xl font-semibold mb-2">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="flex gap-5">
          <div className="w-1/2 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              Coffee Name
              <input
                type="text"
                name="coffeeName"
                className="grow"
                placeholder="Enter coffee name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                name="supplier"
                className="grow"
                placeholder="Supplier"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Catagory
              <input
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
                type="text"
                name="chefe"
                className="grow"
                placeholder="Enter chefe"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                name="taste"
                className="grow"
                placeholder="Taste"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
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
            type="text"
            name="photo"
            className="grow"
            placeholder="Phoro url"
          />
        </label>
        <button className="btn mt-5 btn-accent w-full">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
