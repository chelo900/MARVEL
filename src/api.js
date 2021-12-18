const { REACT_APP_API_KEY, REACT_APP_API_HASH, REACT_APP_API_URL } =
  process.env;
//, { mode: "no-cors" }
function get(url) {
  return fetch(`${REACT_APP_API_URL}${url}`)
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    });
}

function getCharacters() {
  return get(
    `/characters?ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`
  );
}

function getSuperhero(id) {
  return get(`/superheroes/${id}`);
}

function getComics(id) {
  return get(`/superheroes/${id}/comics`);
}

function getEvents(id) {
  return get(`/superheroes/${id}/events`);
}

function getSeries(id) {
  return get(`/superheroes/${id}/series`);
}

function getStories(id) {
  return get(`/superheroes/${id}/stories`);
}

export {
  getCharacters,
  getSuperhero,
  getComics,
  getEvents,
  getSeries,
  getStories,
};
