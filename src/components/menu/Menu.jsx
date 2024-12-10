import BgImage from '../../assets/Rectangle103.png'; 

const Menu = () => {
  return (
    <div
      className="w-full h-[300px] brightness-150  flex flex-col items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Content inside the menu */}
      <p className="text-7xl font-semibold ">MENU</p>
      <p className="mt-4 max-w-md text-[#BBBBBB]">
        {`${`Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.`}`}
      </p>
    </div>
  );
};

export default Menu;