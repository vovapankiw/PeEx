import Vue from 'vue';
import  Vuex from 'vuex';

// Import modules
import user from './modules/user';
import cities from "@/store/modules/cities";

Vue.use(Vuex);

const store = {
    modules: {
        user,
        cities,
    }
};

export default  new Vuex.Store(store);
