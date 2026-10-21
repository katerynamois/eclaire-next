"use client";

import { useSelector, useDispatch } from 'react-redux';
import Link from "next/link";
import { addToCart, removeFromCart, clearCart } from "@/redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div className="card cart">
      <div className="card-header">
        <h2 className="mb-0">Shopping Cart</h2>
      </div>
      <div className="card-body">
        {cart.cakes.length === 0 ? (
          <>
            <p className="cart-empty">Your cart is empty</p>
            <Link href="/shop" className="btn btn-primary w-100">Go to Shop</Link>
          </>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.cakes.map(cake => (
                <li key={cake.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{cake.name}</strong>
                    <div className="cart-line-price">{cake.price} kr. each · {cake.price * cake.quantity} kr.</div>
                  </div>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      aria-label={`Remove one ${cake.name}`}
                      onClick={() => dispatch(removeFromCart(cake.id))}
                    >
                      −
                    </button>
                    <span className="qty-value">{cake.quantity}</span>
                    <button
                      className="qty-btn"
                      aria-label={`Add one more ${cake.name}`}
                      onClick={() => dispatch(addToCart(cake))}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <p><span>Total Items</span> <span>{cart.totalItems}</span></p>
              <p className="mb-0 cart-total"><span>Total Price</span> <span>{cart.totalPrice} kr.</span></p>
            </div>

            <Link href="/checkout" className="btn btn-primary w-100 mb-3">
              Go to Checkout
            </Link>
            <button
              className="btn btn-clear w-100"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
