<template>
    <div class="app__movies" v-if="GET_MOVIES">
        <TheMovie
            v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :img="movie.img"
            :title="movie.title"
        />
    </div>
</template>

<script>
import TheMovie from "./TheMovie.vue";

// 2 способ
import { mapGetters } from "vuex";

export default {
    name: "AppMovies",
    components: {
        TheMovie,
    },
    created() {
        this.$store.dispatch("movies/FETCH_MOVIES");
    },
    computed: {
        // 2 способ
        ...mapGetters("movies", ["GET_MOVIES"]),
        movies() {
            // 1 способ
            return this.$store.getters["movies/GET_MOVIES"];
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
