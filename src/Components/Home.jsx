/** @format */

import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h2 className="text-2xl mt-5 font-semibold">
        All Coffee {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2  gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
