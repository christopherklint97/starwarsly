import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";
/**
 * FilmList component for displaying ItemList
 */
function FilmList() {
  // Creating items array made up film objects found in state
  const items = useSelector((st) =>
    Object.values(st.films).map((f) => ({ ...f, url: `/films/${f.id}` }))
  );
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
