import axios from 'axios';

const state = {
  token: localStorage.getItem('token') || '',
  user: null,
};

const mutations = {

};

const actions = {

};

const getters = {
  isLoggedIn: state => {
    if(state.token != '') 
      return true;
    else 
      return false;
  },
  user: state => state.user
};

export default {
  state,
  actions,
  mutations,
  getters
}
