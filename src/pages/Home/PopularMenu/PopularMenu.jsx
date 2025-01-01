import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "./../../Menu/MenuCAtegory/MenuCategory";
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>

     
        <Link to={'/menu'} className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </Link>
     
    </section>
  );
};

export default PopularMenu;
