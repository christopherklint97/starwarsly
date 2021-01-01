import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getPersonFromAPI } from "./actions/people.js";
import Sublist from "./Sublist";

/**
 * Person component
 */
function Person() {
  // Declaring variables via route params and state via useSelector
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector((st) => st.people[id]);
  const planetState = useSelector((st) => st.planets);
  const filmState = useSelector((st) => st.films);
  const missing = !person;

  // Get person when component loads if it is missing
  useEffect(
    function () {
      if (missing) {
        dispatch(getPersonFromAPI(id));
      }
    },
    [id, missing, dispatch]
  );

  if (missing) return "loading...";

  // Save homeworld from person info
  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown",
  };

  // Save films array from person info, used for sublist
  const films = person.films.map((fid) => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown",
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p>
        <b>Gender: </b>
        {person.gender}
      </p>
      <p>
        <b>Birth Year: </b>
        {person.birthYear}
      </p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;
