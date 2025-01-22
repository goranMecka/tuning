import { BikeProduct } from "./Filters";
import Card from "./Card";

type Props = { arr: BikeProduct[] };

export default function DisplayItems({ arr }: Props) {
  return (
    <div className="col-md-9">
      <div className="row ">
        {arr.map((ele, idx) => {
          return (
            <Card
              key={idx}
              name={ele.name}
              image={ele.image}
              price={ele.price}
            />
          );
        })}
      </div>
    </div>
  );
}
