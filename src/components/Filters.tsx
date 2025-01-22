import { useState } from "react";
import EachFilter from "./EachFilter";

export type BikeProduct = {
  brand: string;
  gender: string;
  image: string;
  name: string;
  price: number;
  [key: string]: string | number;
};

type Props = {
  products: BikeProduct[];
  update(filteredProducts: BikeProduct[]): void;
};

const genderOptions = ["Male", "Female"];
const brandOptions = [
  "LE GRAND BIKES",
  "KROSS",
  "EXPLORER",
  "VISITOR",
  "PONY",
  "FORCE",
  "E-BIKES",
  "IDEAL",
];

export default function Filters({ products, update }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilter = (type: string, value: string) => {
    const filtered =
      type === "all"
        ? products
        : products.filter((product) =>
            type === "gender"
              ? product[type].toLowerCase() === value.toLowerCase()
              : product[type] === value
          );
    update(filtered);
    setActiveFilter(value);
  };

  const getFilteredItemCount = (type: string, value: string) => {
    return type === "all"
      ? products.length
      : products.filter((product) =>
          type === "gender"
            ? product[type].toLowerCase() === value.toLowerCase()
            : product[type] === value
        ).length;
  };

  return (
    <div className="col-md-3">
      <h3>Filter by:</h3>

      <ul className="sub-menu">
        <li
          data-type="all"
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => handleFilter("all", "all")}
        >
          <span>Show all</span>
          <span className="badge" id="allBadge">
            {getFilteredItemCount("all", "all")}
          </span>
        </li>
      </ul>
      <hr />

      <EachFilter
        activeFilter={activeFilter}
        filterType="gender"
        options={genderOptions}
        handleFilter={handleFilter}
        getFilteredItemCount={getFilteredItemCount}
      />
      <EachFilter
        activeFilter={activeFilter}
        filterType="brand"
        options={brandOptions}
        handleFilter={handleFilter}
        getFilteredItemCount={getFilteredItemCount}
      />
    </div>
  );
}
