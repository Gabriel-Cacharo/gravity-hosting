import { Link } from "react-router-dom";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

import AstronautServer from "../../assets/images/astronautServer.png";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerInformationsContainer">
        <div className="footerGravityHosting">
          <img src={AstronautServer} alt="" />

          <div className="footerGravityHostingText">
            <h4>Gravity Hosting</h4>
            <p>
              Infraestrutura de ponta com servidores 100% em armazenamento SSD.
            </p>
          </div>
        </div>

        <div className="footerInformation">
          <h5>Nossos serviços</h5>
          <Link to="/products/vps">VPS</Link>
          <Link to="/products/minecraft">Minecraft</Link>
          {/* <a>BotJS</a> */}
        </div>

        <div className="footerInformation">
          <h5>Empresa</h5>
          {/* <a>Status</a> */}
          <a>Termos de Serviço</a>
        </div>

        <div className="footerInformation">
          <h5>Redes Sociais</h5>
          <div className="socialMedias">
            <a className="socialMedia" href="https://discord.gg/3WmcNbkm7m">
              <FaDiscord />
            </a>
            <a
              className="socialMedia"
              href="https://www.instagram.com/gravityhosting/"
            >
              <FaInstagram />
            </a>
            <a className="socialMedia">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
