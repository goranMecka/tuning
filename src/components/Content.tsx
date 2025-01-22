import { useEffect, useState } from "react";
import Filters, { BikeProduct } from "./Filters";
import DisplayItems from "./DisplayItems";

export default function Content() {
  const [products, setProducts] = useState<BikeProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<BikeProduct[]>([]);

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const updateFilteredProducts = (products: BikeProduct[]) => {
    setFilteredProducts(products);
  };

  return (
    <div className="row">
      <Filters update={updateFilteredProducts} products={products} />

      <DisplayItems arr={filteredProducts} />
    </div>
  );
}
