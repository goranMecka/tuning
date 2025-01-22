type Props = {
  name: string;
  image: string;
  price: number;
};

export default function Card({ name, image, price }: Props) {
  return (
    <div className="col-md-4 card-cont">
      <a href="#" className="inner">
        <div className="img-cont">
          <img
            src={`../../img/${image}.png`}
            className="card-img img img-responsive"
          />
        </div>
        <div className="content-cont">
          <h2>{name}</h2>
          <p className="price">{price} $</p>
        </div>
      </a>
    </div>
  );
}
