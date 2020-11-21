import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';
import Suggestion from './suggestions'
import Experience from './experiences'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Suggestion,
    Experience
  }
})
