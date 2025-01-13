import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading,  refetch] = useMenu();
  const axiosSecure = useAxiosSecure();



   const handleDelete = async (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async(result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/menu/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
            console.log(res.data)
          });
        }
      });
    };
  



  return (
    <div>
      <SectionTitle
        subHeading={`Hurry Up`}
        heading={`Manage All Items`}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Recipe</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.recipe.slice(0, 10)}...</td>
                  <td>${item?.price}</td>
                  <td>
                    <Link
                      to={`/dashboard/updateItem/${item._id}`}
                      className="btn btn-ghost"
                    >
                      Edit
                    </Link>
                 
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
