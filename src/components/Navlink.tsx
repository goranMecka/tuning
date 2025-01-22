import { NavlinkInterface } from "./NavlinkInterface";

export default function Navlink({
  link,
  text,
  active,
  onClick,
}: NavlinkInterface) {
  return (
    <li className={active ? "active" : ""}>
      <a href={link} onClick={onClick}>
        {text}
      </a>
    </li>
  );
}
