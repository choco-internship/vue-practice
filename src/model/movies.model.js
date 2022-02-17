export default function (api) {
    return {
        getMovies: () => api.get("/357f9ef7-794f-4d16-8e26-617f7fb0d7ba").then(({ data }) => data),
        getMovie: () => api.get("/541f9ad4-f1b3-4724-9874-2ebe070ba520").then(({ data }) => data),
    };
}
