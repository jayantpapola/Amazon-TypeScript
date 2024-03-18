import { ProductProps } from "../types";

const CartProduct = ({ data }: { data: ProductProps }) => {
  const {
    title,
    category,
    image,
    description,
    price,
    rating: { rate, count },
  } = data;
  return (
    <div className="p-4 bg-white rounded-md w-full">
      <div className="flex py-2 px-4 gap-4">
        <div className="w-[150px] min-w-[150px] aspect-square ">
          <img src={image} className="h-full bg-slate-100 object-contain" />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="my-2 text-[12px] line-clamp-2 w-2/3">{description}</p>
          <span className="bg-gray-300 text-[10px] font-semibold p-1 w-max rounded-md px-2 ml-auto mt-2">
        {category}
      </span>
          <p>
            <b>{rate} </b>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <span className="text-sm"> ({count})</span>
          </p>
          <b className="text-xl">Price: ₹ {price}</b>
          <br />
          <button
            className="bg-yellow-500 w-max px-4 mt-2 rounded-md h-[30px] font-semibold hover:bg-yellow-600 duration-100"
            // onClick={() => dispatch(addToCart(data))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
