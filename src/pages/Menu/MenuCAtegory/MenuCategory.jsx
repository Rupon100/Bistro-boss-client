import Cover from "../../Shared/Cover/Cover";
import MenuItem from "./../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom"; 

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className=" gap-10">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-10 " >
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Link to={`/order/${title}`} >
        <button className="btn btn-outline border-0 border-b-4 mt-4" > Order now </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
