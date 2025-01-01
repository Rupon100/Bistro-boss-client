import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboared = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu p-4 space-y-3 ">
          <li className="border btn" >
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li className="border btn" >
            <NavLink to={`/dashboard/cart`}>My Cart</NavLink>
          </li>
          <li className="border btn" >
            <NavLink to={`/dashboard/review`}>Add a review</NavLink>
          </li>
          <li className="border btn" >
            <NavLink to={`/dashboard/reservation`}>Reservation</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboared;
