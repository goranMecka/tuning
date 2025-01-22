import { useState } from "react";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navlink from "./Navlink";

export default function Navigation() {
  const [activeLinkText, setActiveLinkText] = useState("");
  const handleNavlinkClick = (text: string) => {
    setActiveLinkText(text);
  };
  return (
    <nav className="nav navv bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 flex">
            <div>
              <a className="navbar-brand" href="#">
                <img src="../../img/logo.png" alt="" width="78px" />
              </a>
            </div>

            <ul className="nav navbar-nav">
              <Navlink
                link="#"
                text="Home"
                active={activeLinkText === "Home"}
                onClick={() => handleNavlinkClick("Home")}
              />
              <Navlink
                link="#"
                text="Bikes"
                active={activeLinkText === "Bikes"}
                onClick={() => handleNavlinkClick("Bikes")}
              />
              <Navlink
                link="#"
                text="Gear"
                active={activeLinkText === "Gear"}
                onClick={() => handleNavlinkClick("Gear")}
              />
              <Navlink
                link="#"
                text="Parts"
                active={activeLinkText === "Parts"}
                onClick={() => handleNavlinkClick("Parts")}
              />
              <Navlink
                link="#"
                text="Tires"
                active={activeLinkText === "Tires"}
                onClick={() => handleNavlinkClick("Tires")}
              />
              <Navlink
                link="#"
                text="Service-info"
                active={activeLinkText === "Service-info"}
                onClick={() => handleNavlinkClick("Service-info")}
              />
              <Navlink
                link="#"
                text="Catalogues"
                active={activeLinkText === "Catalogues"}
                onClick={() => handleNavlinkClick("Catalogues")}
              />
              <Navlink
                link="#"
                text="Contact"
                active={activeLinkText === "Contact"}
                onClick={() => handleNavlinkClick("Contact")}
              />
            </ul>

            <div className="icons-menu">
              <span>
                <FontAwesomeIcon className="fas" icon={faShoppingBag} />
                <FontAwesomeIcon className="fas" icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
}
