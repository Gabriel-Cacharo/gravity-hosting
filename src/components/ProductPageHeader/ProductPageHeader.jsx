import PropTypes from "prop-types";

import AstronautMinecraft from "../../assets/images/astronautMinecraft.png";
import AstronautServer from "../../assets/images/astronautServer.png";
import AstronautComputer from "../../assets/images/astronautComputer.png";
import AstronautBot from "../../assets/images/astronautBot.png";

const ProductPageHeader = ({ title, imageUrl, type }) => {
  let subtitle = "";

  if (type === "minecraft") {
    subtitle =
      "Planos com o melhor custo benefício para seu servidor de Minecraft, garantindo seu servidor online e sem travamentos!";
  } else if (type === "vps") {
    subtitle =
      "Servidores virtuais com infraestrutura de ponta e o melhor custo benefício, prezando a sua melhor experiência!";
  } else if (type === "bot") {
    subtitle = "Hospedagem para seu BotJS, nunca deixando seu servidor na mão!";
  }

  const renderImage = () => {
    if (type === "minecraft") {
      return <img src={AstronautMinecraft} alt="" />;
    } else if (type === "bot") {
      return <img src={AstronautBot} className="imageHeaderProduct" alt="" />;
    } else if (type === "vps") {
      return (
        <img src={AstronautComputer} className="imageHeaderProduct" alt="" />
      );
    }
  };

  return (
    <header
      className="productPageHeader"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
      }}
    >
      <div className="productPageHeaderContent">
        <div className="textsContainer">
          <h2 data-aos="zoom-in">{title}</h2>
          <p data-aos="zoom-in">{subtitle}</p>
        </div>

        {renderImage()}
      </div>
    </header>
  );
};

ProductPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductPageHeader;
