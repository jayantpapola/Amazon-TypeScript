import { addToCart } from "../redux/productSlice";
import { useAppDispatch } from "../redux/store";
import { ProductProps } from "../types";

const Product = ({ data }: { data: ProductProps }) => {
  const {
    title,
    category,
    image,
    description,
    price,
    rating: { rate, count },
  } = data;

  const dispatch = useAppDispatch();

  return (
    <div className="p-4 bg-white rounded-md flex flex-col justify-between">
      <b className="truncate text-lg">{title}</b>
      <span className="line-clamp-2 text-[12px]">{description}</span>
      <span className="bg-gray-300 text-[10px] font-semibold p-1 w-max rounded-md px-2 ml-auto mt-2">
        {category}
      </span>
      <img src={image} className="p-4 aspect-square object-contain" alt="" />
      <p>
        <b>{rate} </b>
        <i className="fa-solid fa-star text-yellow-400"></i>
        <span className="text-sm"> ({count})</span>
      </p>
      <b className="text-xl">Price: ₹ {price}</b>
      <button
        className="bg-yellow-500 w-full mt-2 rounded-md h-[30px] font-semibold hover:bg-yellow-600 duration-100"
        onClick={() => dispatch(addToCart(data))}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
