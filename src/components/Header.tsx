import Heading from "./Heading";
import Navigation from "./Navigation";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Navigation />
      <hr />
      <Heading title="Bikes" />
    </>
  );
}
