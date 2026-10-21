import Link from "next/link";
import ProfitCard from "@/components/ProfitCard";

export default function Home() {
  return (
    <>
      <h1>Welcome to Eclaire shop</h1>
      <ProfitCard />
      <p className="home-shop-link">
        <Link href="/shop">Browse our éclairs →</Link>
      </p>
    </>
  );
}


