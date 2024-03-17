import { useEffect } from "react";
import { fetchHomeProducts } from "../redux/asyncthunk";
import { useAppDispatch, useAppSelector } from "../redux/store";
import Product from "./Product";
import { ProductProps } from "../types";

const ProductsShowcase = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeProducts());
  }, []);

  const products = useAppSelector((state) => state.products.products);
  return (
    <div className="px-[50px] grid grid-cols-4 gap-4 w-full mt-4">
      {products.map((p: ProductProps) => (
        <Product data={p} key={p.id} />
      ))}
    </div>
  );
};

export default ProductsShowcase;
