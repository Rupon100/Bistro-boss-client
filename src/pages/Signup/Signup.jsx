import { Link, useFormAction } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from './../../Providers/AuthProvider';

const Signup = () => {

  const {createUser,  updateUserProfile } = useContext(AuthContext); 

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      console.log(result);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log("user profile updated")
        reset();
      })
      .catch(err => {

      })
    })
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro boss | Signup</title>
      </Helmet>
      <div className="hero-content flex flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: "Name is required" })}
                placeholder="photoURL"
                className="input input-bordered"
              />
                {errors.photoURL && <span>PhotoURL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "email is required" })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span>This field is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 4,
                  maxLength: 8,
                  pattern: /^(?=.{6,})((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                })}
                placeholder="password"
                className="input input-bordered"
              />
              
              {errors.password?.type === 'pattern' && <p className="text-red-700">The pass should have 1 uppercase 1 lower and min 8 char.</p>}

            </div>



            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p>
            <small>
              Have an account? <Link to={`/login`}>Login</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
