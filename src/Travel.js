import React from "react";

const Travel = ({ destination, country, image, distance }) => (
  <figure>
    <img src={image} alt={destination} />
    <figcaption>
      <blockquote>{country}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;