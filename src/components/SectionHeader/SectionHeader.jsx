import { PropTypes } from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="sectionHeader" data-aos="fade-down">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeader;
