import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilmFromAPI } from "./actions/films";
import Sublist from "./Sublist";

/**
 * Film component
 */
function Film() {
  // Declaring variables via route params and state via useSelector
  const { id } = useParams();
  const film = useSelector((st) => st.films[id]);
  const planetState = useSelector((st) => st.planets);
  const characterState = useSelector((st) => st.people);
  const dispatch = useDispatch();
  const missing = !film;

  // Get film when component loads if it is missing
  useEffect(
    function () {
      if (missing) {
        dispatch(getFilmFromAPI(id));
      }
    },
    [missing, id, dispatch]
  );

  if (missing) return <h1 className="mt-5">loading...</h1>;

  // Save planets array from film info, used for sublist
  const planets = film.planets.map((pid) => ({
    id: pid,
    url: `/planets/${pid}`,
    display: planetState[pid] ? planetState[pid].name : "Unknown",
  }));

  // Save characters array from film info, used for sublist
  const characters = film.characters.map((cid) => ({
    id: cid,
    url: `/people/${cid}`,
    display: characterState[cid] ? characterState[cid].name : "Unknown",
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {film.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p className="lead">{film.openingCrawl}</p>

      <p>
        <b>Director: </b>
        {film.director}
      </p>

      <Sublist title="Planets" items={planets} />
      <Sublist title="People" items={characters} />
    </div>
  );
}

export default Film;
