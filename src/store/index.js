import Vue from "vue";
import Vuex from "vuex";
import { movies } from "./modules/movies.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        movies,
    },
});
