import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";

/**
 * PersonList component for displaying ItemList
 */
function PersonList() {
  // Creating items array made up person objects found in state
  const items = useSelector((st) =>
    Object.values(st.people).map((p) => ({ ...p, url: `/people/${p.id}` }))
  );
  return <ItemList title="People" items={items} />;
}

export default PersonList;
