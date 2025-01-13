import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleSignin } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleGoogleSignin = () => {
    googleSignin()
    .then(result => {
        toast.success('Logged in!');
        const user = {
          name: result.user?.displayName,
          email: result.user?.email
        };
        axiosSecure.post('/users', user)
        navigate('/');
    })
  }

  return (
    <div className="p-2 flex justify-center items-center">
      <button onClick={handleGoogleSignin} className="btn">
        <FaGoogle className="mr-4"></FaGoogle>
        Button
      </button>
    </div>
  );
};

export default SocialLogin;
