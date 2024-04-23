import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="space-x-2 text-2xl font-semibold">
            <Link className="border py-1 px-4" to={'/'}>Home</Link>
            <Link className="border py-1 px-4" to={'/addCoffee'}>Add Coffee</Link>
            {/* <Link className="border py-1 px-4" to={'/updatedCoffee'}>Updated Coffee</Link> */}
        </div>
    );
};

export default Header;