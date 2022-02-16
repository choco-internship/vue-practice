<template>
    <div id="app">
        <TheHeader />
        <AppMovies />
    </div>
</template>

<script>
// Components
import TheHeader from "./components/ui/TheHeader.vue";
import AppMovies from "./components/movies/AppMovies";

export default {
    name: "App",
    components: {
        TheHeader,
        AppMovies,
    },
};
</script>
