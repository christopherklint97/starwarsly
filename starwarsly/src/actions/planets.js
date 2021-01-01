import axios from "axios";
import { LOAD_PLANET } from "./types";

/**
 * Planets action creator to get planet from API
 *
 * @param {number|string} id
 */
function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let { name, population, climate, residents, films } = res.data;

    // Save array of ids for residents
    residents = residents.map((url) => url.match(/\d+/)[0]);

    // Save array of ids for films
    films = films.map((url) => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}

/**
 * Planets action creator for updating state after getting planet
 *
 * @param {{ id: string, name: string, population: string, climate: string, residents: string, films: string }} planet
 */
function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}

export { getPlanetFromAPI };
