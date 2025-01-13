import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Dashboared = () => {

  // TODO: get isAdmin from the DB
  const isAdmin = useAdmin();


  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu p-4 space-y-3 text-white ">
          {
            isAdmin 
            ? <>
                <NavLink to={'/dashboard/adminhome'} >
                  Admin Home
                </NavLink>
                <NavLink to={'/dashboard/additems'} >
                  Add Items
                </NavLink>
                <NavLink to={'/dashboard/manageitems'} >
                   Manage Items
                </NavLink>
                <NavLink to={'/dashboard/bookings'} >
                  Mangage Booking
                </NavLink>
                <NavLink to={'/dashboard/users'} >
                  All Users
                </NavLink>
              </>
            : <></>
          }

          <div className="divider" ></div>

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
            <NavLink to={`/dashboard/paymentHistory`}>Payment History</NavLink>
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
