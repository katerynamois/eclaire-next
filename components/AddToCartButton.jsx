"use client";

import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

export  default function AddToCartButton({cake}) {
    const dispatch = useDispatch();
    return(
<button className="btn btn-primary w-100" onClick={() => dispatch(addToCart(cake))}>
  Add to Cart
</button>
    )
}