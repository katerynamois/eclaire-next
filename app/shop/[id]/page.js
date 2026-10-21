import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";

const API_URL = "https://6abe4f88c4d5ac54830261cc.mockapi.io/eclairs";

export default async function ProduktPage({params}) {
      const { id } = await params;
const res = await fetch(`${API_URL}/${id}`, { next: { revalidate: 60 } });

  if (!res.ok) {
   notFound();
}

  const cake = await res.json();

    return (
    <>
      <h1>{cake.name}</h1>
      <div className="row g-5 mb-5">
        <div className="col-md-6">
          <img src={cake.image} alt={cake.name} className="cake-image" />
        </div>
        <div className="col-md-6">
          <p>{cake.description}</p>
          <p className="price">{cake.price} kr.</p>
          <AddToCartButton cake={cake} />
          <p className="mt-4">
            <Link href="/shop">← Back to shop</Link>
          </p>
        </div>
      </div>
    </>
  );

}
