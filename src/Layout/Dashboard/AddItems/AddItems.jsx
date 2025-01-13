import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();


  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })

    if(res.data.success){
        // now send the menu item data with the image url
        const menuItem = {
            name: data.name,
            recipe: data.details,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price)
        }
        
        const menuRes = await axiosSecure.post('/menu', menuItem);
        
        if(menuRes.data.insertedId){
            reset();
            toast.success('menu item added!')
            console.log("added!");
        }

    }
  }

  return (
    <div>
      <SectionTitle
        subHeading={`What's new?`}
        heading={`Add an Item`}
      ></SectionTitle>

      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 "
        >
          <input
            className="p-3"
            type="text"
            placeholder="Recipe Name"
            {...register("name")}
          />
          <input
            className="p-3"
            type="number"
            placeholder="Price"
            {...register("price")}
          />

          <textarea
           {...register("details")}
           className="textarea textarea-bordered" placeholder="Details"></textarea>

          <input 
           {...register("image")}
          type="file" className="file-input w-full" />

          <select
          defaultValue={`default`}
            {...register("category")}
            className="select select-bordered w-full"
          >
            <option disabled value={`default`} >Select a Category</option>
            <option value={`salad`}>Salad</option>
            <option value={`pizza`}>Pizza</option>
            <option value={`soup`}>Soup</option>
            <option value={`dessets`}>Desserts</option>
            <option value={`drinks`}>Drinks</option>
          </select>

           
           <button className="btn" >
            Add Item
           </button>

        </form>
      </div>
    </div>
  );
};

export default AddItems;
