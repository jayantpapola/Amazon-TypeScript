import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const Header = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.products.cart);

  return (
    <div className="h-[80px] flex justify-between px-4 py-1 items-center shadow-lg text-white sticky top-0">
      <img
        src="https://pngimg.com/d/amazon_PNG11.png"
        alt="amazon-logo"
        className="h-[60%] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-4 items-center text-lg">
        <span className="font-bold ">Jayant</span>
        <i className="fa-solid  fa-user"></i>

        <button
          className="mx-4 px-1 relative"
          title="Cart"
          onClick={() => navigate("/cart")}
        >
          <span className="absolute right-0 top-0 size-[15px] flex items-center justify-center rounded-full text-[10px] bg-red-600">
            {cart.length}
          </span>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
