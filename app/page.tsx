import { Reviews } from "@/components/reviews";
import { getProduct } from "@/lib/sample-data";

export default function Home() {
  const product = getProduct("mower");

  return <Reviews product={product} />;
}
