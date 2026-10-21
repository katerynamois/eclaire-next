"use client";

import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/redux/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector(state => state.cart);

  const handleCheckout = () => {
    dispatch(clearCart());
    router.push("/");
  };

  if (cart.cakes.length === 0) {
    return (
      <div className="card cart">
        <div className="card-header">
          <h2 className="mb-0">Checkout</h2>
        </div>
        <div className="card-body">
          <p className="cart-empty">Your cart is empty. Add some éclairs before checking out.</p>
          <Link href="/shop" className="btn btn-primary w-100">Go to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card cart">
      <div className="card-header">
        <h2 className="mb-0">Checkout</h2>
      </div>
      <div className="card-body">
        <p className="checkout-label">Order summary</p>
        <ul className="list-group mb-4">
          {cart.cakes.map(cake => (
            <li key={cake.id} className="list-group-item d-flex justify-content-between">
              <span>{cake.name} <span className="cart-qty">× {cake.quantity}</span></span>
              <span>{cake.price * cake.quantity} kr.</span>
            </li>
          ))}
        </ul>

        <div className="cart-summary">
          <p><span>Total Items</span> <span>{cart.totalItems}</span></p>
          <p className="mb-0 cart-total"><span>Total</span> <span>{cart.totalPrice} kr.</span></p>
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={handleCheckout}>
          Place Order
        </button>
        <button className="btn btn-clear w-100 mb-3" onClick={() => dispatch(clearCart())}>
  Clear Order
</button>

        <Link href="/cart" className="btn btn-clear w-100">Back to Cart</Link>
      </div>
    </div>
  );
};

export default Checkout;
