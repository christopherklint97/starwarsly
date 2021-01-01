import axios from "axios";
import { LOAD_FILM } from "./types";

/**
 * Films action creator to get films from API
 *
 * @param {number|string} id
 */
function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets,
    } = res.data;

    // Returns an array of ids for characters
    characters = characters.map((url) => url.match(/\d+/)[0]);

    // Returns an array of ids for planets
    planets = planets.map((url) => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}

/**
 * Films action creator to update the state in store after receiving film info
 *
 * @param {{id: string, name: string, director: string, openingCrawl: string, characters: string, planets: string}} film
 */
function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}

export { getFilmFromAPI };
