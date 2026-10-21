import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

const API_URL = "https://6abe4f88c4d5ac54830261cc.mockapi.io/eclairs";

export default async function ShopPage() {
  const res = await fetch(API_URL, { next: { revalidate: 60 } });

  if (!res.ok) {
    return <p className="shop-message">Could not load éclairs. Please try again later.</p>;
  }

  const cakes = await res.json();

  return (
    <>
      <h1>Our éclairs</h1>
      <div className="row g-4 mb-5">
        {cakes.map((cake) => (
          <div key={cake.id} className="col-sm-6 col-lg-4">
            <div className="card h-100">
              <Link href={`/shop/${cake.id}`}>
                <img src={cake.image} alt={cake.name} className="cake-image" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link href={`/shop/${cake.id}`}>{cake.name}</Link>
                </h5>
                <p className="card-text">{cake.description}</p>
                <p className="price">{cake.price} kr.</p>
                <AddToCartButton cake={cake} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
