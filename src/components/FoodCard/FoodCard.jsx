import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import useCart from './../../Hooks/useCart';
 

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [ ,refetch] = useCart();
  
  const handleAddtoCart = (food) => {
    if (user && user?.email) {
      //send cart item to the DB
      
      const cartIem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price
      }
      
      axiosSecure.post('/carts', cartIem)
      .then(res => {
        console.log(res.data);
        if(res.data?.insertedId){
          // toast("Data Added!");
          toast.success("Item Added to Cart!");
          refetch();
        }
      })

    } else {
      Swal.fire({
        title: "Your are not Login!",
        text: "You want to add this this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: {form: location} });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute m-5 p-2 bg-slate-700 rounded text-white">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
