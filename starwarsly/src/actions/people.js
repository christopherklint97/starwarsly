import axios from "axios";
import { LOAD_PERSON } from "./types";

/**
 * People action creator to get person from API
 *
 * @param {number|string} id
 */
function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let { name, gender, birth_year: birthYear, homeworld, films } = res.data;

    // Save array of film ids
    films = films.map((url) => url.match(/\d+/)[0]);

    // Save homeworld id
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}

/**
 * People action creator for updating state after getting person object
 *
 * @param {{ id: string, name: string, gender: string, birthYear: string, homeworld: string, films: string }} person
 */
function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}

export { getPersonFromAPI };
