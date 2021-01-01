import React from "react";
import { Link } from "react-router-dom";

/**
 * Sublist component for creating a list inside other components, ex: films
 * @param {{title: string, items: {}[]}} props
 */
function Sublist({ title, items }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sublist;
