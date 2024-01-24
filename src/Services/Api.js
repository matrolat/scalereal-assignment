import axios from "axios";

export const getMovieData = async () => {
  try {
    return await axios.get(`https://swapi.dev/api/films/?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(" Error in get movie data API : " + error);
  }
};
