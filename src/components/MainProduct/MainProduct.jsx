import PropTypes from "prop-types";

import { GoArrowRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

import AstrounautServer from "../../assets/images/astronautServer.png";
import AstrounautMinecraft from "../../assets/images/astronautMinecraft.png";
import AstrounautBot from "../../assets/images/astronautBot.png";
import { Link } from "react-router-dom";

const MainProduct = ({ name, description, type, list, value, link }) => {
  return (
    <div className="mainProductContainer" data-aos="fade-in">
      <h5>{name}</h5>

      <div className="mainProductInformations">
        {type == "Minecraft" ? (
          <img
            src={AstrounautMinecraft}
            alt="Astronaut Minecraft"
            className="mainProductImage"
          />
        ) : type == "VPS" ? (
          <img
            src={AstrounautServer}
            alt="Astronaut Server"
            className="mainProductImage"
          />
        ) : (
          <img
            src={AstrounautBot}
            alt="Astronaut"
            className="mainProductImage"
          />
        )}

        <p>{description}</p>

        <ul>
          {list &&
            list.map((listItem) => (
              <li key={listItem}>
                <GoArrowRight className="iconMarginRight" /> {listItem}
              </li>
            ))}
        </ul>

        <div className="mainProductPriceContainer">
          <span>A partir de</span>
          <h6>
            R${value} <b>/mês</b>
          </h6>
        </div>

        <button>
          <Link
            to={link}
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            Conhecer <BsArrowRight className="buttonIcon" />
          </Link>
        </button>
      </div>
    </div>
  );
};

MainProduct.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default MainProduct;
