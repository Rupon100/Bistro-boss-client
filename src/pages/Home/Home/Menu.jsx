import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../Menu/MenuCAtegory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const dessets = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  console.log(menu);

  return (
    <div>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title={`Our Menu`}></Cover>
      {/* main cover */}
      <SectionTitle
        heading={`Todays Offer!`}
        subHeading={`Don't miss`}
      ></SectionTitle>

      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessets menu items */}
      <MenuCategory
        items={dessets}
        title={"Desset"}
        coverImg={dessertImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>

      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"Salad"}
        coverImg={saladImg}
      ></MenuCategory>

      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
