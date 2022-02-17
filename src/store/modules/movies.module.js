import api from "../../services/api";

export const movies = {
    namespaced: true,
    state: {
        movies: null,
    },
    mutations: {
        REMOVE_MOVIES(state, payload) {
            state.movies = state.movies.filter((d) => d.id !== payload.id);
        },
        SET_MOVIES(state, payload) {
            state.movies = payload;
        },
        ADD_MOVIE(state, payload) {
            state.movies.push(payload);
        },
    },
    actions: {
        async FETCH_MOVIES({ commit }) {
            try {
                const { movies } = await api.movies.getMovies();
                commit("SET_MOVIES", movies);
            } catch (error) {
                console.log("ERROR", error);
            }
        },
        async FETCH_MOVIE({ commit }) {
            try {
                const { movie } = await api.movies.getMovie();
                commit("ADD_MOVIE", movie);
            } catch (error) {
                console.log("ERROR", error);
            }
        },
    },
    getters: {
        GET_MOVIES: (state) => state.movies,
    },
};
