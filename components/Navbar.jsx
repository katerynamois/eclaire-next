"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Navbar() {
  const pathname = usePathname();
  const totalItems = useSelector((state) => state.cart.totalItems);

  const active = (href) => (pathname === href ? "active" : "");

  return (
    <nav className="navbar-shop">
      <h1 className="logo"><Link href="/">Eclaire shop</Link></h1>

      <div className="nav-links">
        <Link href="/" className={active("/")}>Home</Link>
        <Link href="/shop" className={active("/shop")}>Shop</Link>
        <Link href="/checkout" className={active("/checkout")}>Checkout</Link>
      </div>

      <Link href="/cart" className={`cart-button ${active("/cart")}`}>
        <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 3h3l2.5 12h11L21 7H6.2" />
          <path d="M9 10h9M9.5 12.5h8" />
          <circle cx="9" cy="19.5" r="1.3" />
          <circle cx="17" cy="19.5" r="1.3" />
        </svg>
        <span>Cart</span>
        <span className="cart-count">{totalItems}</span>
      </Link>
    </nav>
  );
}
