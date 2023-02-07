import { PropTypes } from "prop-types";

const SectionHeader = ({ title, subtitle, type }) => {
  return (
    <div
      className="sectionHeader"
      data-aos={type === "termsPage" ? "" : "fade-down"}
    >
      <h3 data-aos={type === "termsPage" ? "fade-in" : ""}>{title}</h3>
      <p data-aos={type === "termsPage" ? "fade-in" : ""}>{subtitle}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default SectionHeader;
