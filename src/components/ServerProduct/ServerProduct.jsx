import PropTypes from "prop-types";

import EuaImage from "../../assets/images/eua.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ServerProduct = ({ serverProducts }) => {
  return (
    <div className="serverProductContainer">
      <header className="serverProductHeader">
        <h4>VCPU</h4>
        <h4>RAM</h4>
        <h4>DISCO SSD</h4>
        <h4>ANTI DDOS</h4>
        <h4>LOCALIZAÇÃO</h4>
        <h4>PREÇO</h4>
        <h4>AÇÕES</h4>
      </header>

      <main className="serverProductContent">
        {serverProducts.map((serverProduct) => {
          return (
            <div className="serverProduct" key={serverProduct.ram}>
              <p data-title="CPU">{serverProduct.cpu}vCPU</p>
              <p data-title="RAM">
                <b>{serverProduct.ram}GB</b>
              </p>
              <p data-title="DISCO SSD">{serverProduct.ssd}GB</p>
              <p data-title="ANTIDDOS">Incluso</p>
              <div className="imageContainer" data-title="LOCALIZAÇÃO ">
                <img src={EuaImage} alt="" />
              </div>
              <p data-title="PREÇO" style={{ fontSize: "1.3rem" }}>
                <span>R$</span>
                {serverProduct.price}
              </p>
              <a href={serverProduct.buyLink}>
                <AiOutlineShoppingCart className="iconMarginRight" />
                Comprar
              </a>
            </div>
          );
        })}
      </main>
    </div>
  );
};

ServerProduct.propTypes = {
  serverProducts: PropTypes.arrayOf(
    PropTypes.shape({
      cpu: PropTypes.string.isRequired,
      ram: PropTypes.string.isRequired,
      ssd: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      buyLink: PropTypes.string,
    })
  ),
};

export default ServerProduct;
