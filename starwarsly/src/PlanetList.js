import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

/**
 * PlanetList component for displaying ItemList
 */
function PlanetList() {
  // Creating items array made up planet objects found in state
  const items = useSelector((st) =>
    Object.values(st.planets).map((p) => ({ ...p, url: `/planets/${p.id}` }))
  );
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;
