import axios from "axios";
import movies from "../model/movies.model.js";

const api = axios.create({
    baseURL: "https://run.mocky.io/v3",
});

export default {
    movies: movies(api),
};
