import PropTypes from "prop-types";

import Astronaut from "../../assets/images/astronautImage.png";
import AstronautSac from "../../assets/images/astronautSac.png";
import AstronautArmor from "../../assets/images/astronautArmor.png";
import AstronautVelocity from "../../assets/images/astronautRocket.png";
import AstronautServer from "../../assets/images/astronautServer.png";

const Benefits = ({ name, description, imageType }) => {
  return (
    <div className="benefitContainer" data-aos="fade-in">
      {imageType === "armor" ? (
        <img src={AstronautArmor} alt="Astronaut Armor" />
      ) : imageType === "velocity" ? (
        <img src={AstronautVelocity} alt="Astronaut Rocket" />
      ) : imageType === "sac" ? (
        <img src={AstronautSac} alt="Astronaut" />
      ) : imageType === "server" ? (
        <img src={AstronautServer} alt="Astronaut" />
      ) : (
        <img src={Astronaut} alt="Astronaut" />
      )}

      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

Benefits.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
};

export default Benefits;
