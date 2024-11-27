import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./CSS/About.css";

class About extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

About.propTypes = {
  name: PropTypes.string, // Definisi tipe props
};

export default About;
