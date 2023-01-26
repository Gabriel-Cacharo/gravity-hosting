import PropTypes from "prop-types";

import { GoArrowRight } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

import AstronautMinecraft from "../../assets/images/astronautMinecraft.png";
import AstronautServer from "../../assets/images/astronautServer.png";
import AstronautComputer from "../../assets/images/astronautComputer.png";
import AstronautBot from "../../assets/images/astronautBot.png";

const Product = ({ name, price, list, type, buyLink }) => {
  return (
    <div className="productContainer">
      {type === "Minecraft" ? (
        <img src={AstronautMinecraft} alt="Astronaut Minecraft" />
      ) : type === "VPS" ? (
        <img
          src={AstronautServer}
          alt="Astronaut Server"
          className="imageServer"
        />
      ) : type == "Bot" ? (
        <img src={AstronautBot} alt="Astronaut Bot" className="imageBot" />
      ) : (
        <img
          src={AstronautComputer}
          alt="Astronaut Computer"
          className="imageComputer"
        />
      )}
      <h3>{name}</h3>

      <ul>
        {list.map((listItem) => (
          <li key={listItem}>
            <GoArrowRight className="descriptionIcon" /> {listItem}
          </li>
        ))}
      </ul>

      <div className="priceContainer">
        <span>R$</span> <h4>{price}</h4> <span>/mês</span>
      </div>

      <a className="buyButton" href={buyLink}>
        <FaShoppingCart className="iconMarginRight" /> Comprar
      </a>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  type: PropTypes.string,
};

export default Product;
