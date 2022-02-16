<template>
    <div class="app__movies" v-if="movies">
        <TheMovie
            v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :img="movie.img"
            :title="movie.title"
            @removeItem="removeItem"
        />
    </div>
</template>

<script>
import TheMovie from "./TheMovie.vue";

export default {
    name: "AppMovies",
    components: {
        TheMovie,
    },
    data() {
        return {
            movies: [
                {
                    id: 1,
                    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/Intouchables.jpg/203px-Intouchables.jpg",
                    title: "1+1 (Неприкасаемые)",
                },
            ],
        };
    },
    methods: {
        removeItem(id) {
            this.movies = this.movies.filter((d) => d.id !== id);
        },
    },
};
</script>

<style scoped>
.app__movies {
    margin: 24px;
    display: flex;
}
</style>
