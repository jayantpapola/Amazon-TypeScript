import CartProduct from "../components/CartProduct";
import CartSubtotal from "../components/CartSubtotal";
import Header from "../components/Header";
import { useAppSelector } from "../redux/store";

const Cart = () => {
  const cart = useAppSelector((state) => state.products.cart);
  return (
    <div>
      <Header />

      <div className="flex gap-4">
        <div className="mt-4 px-4 flex flex-col gap-4 w-2/3">
          {cart.map((p) => (
            <CartProduct data={p} />
          ))}
        </div>
        <div className="w-1/3">
          <CartSubtotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
