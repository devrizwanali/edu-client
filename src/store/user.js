import axios from '../axios';

const state = {
  token: localStorage.getItem('token') || '',
  user: null,
};

const mutations = {
  LOGIN_USER(state, user, token) {
    state.user = user;
    state.token = token;
  },
  REGISTER_USER(state, user, token) {
    state.user = user;
    state.token = token;
  },
  LOGOUT_USER(state) {
    state.user = null,
    state.token = ''
  }
};

const actions = {
  async login({ commit }, user) {
    const res = await axios.post('http://localhost:3000/api/login', user);
    //save token to localStorage
    localStorage.setItem('token', res.data.token);
    commit('LOGIN_USER', res.data.user, res.data.token);
     
    return res;
  },

  async register({ commit }, user) {
    const response = await axios.post('http://localhost:3000/api/register', user)
    //save token to localStorage 
    localStorage.setItem('token', response.data.token);
    commit('REGISTER_USER', response.data.user, response.data.token);

    return response;
  },

  signOut({ commit }) {
    commit('LOGOUT_USER')
  
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization'];
  }
};

const getters = {
  isLoggedIn: state => {
    if(state.user) 
      return true;
    else 
      return false;
  },
  currentUser: state => state.user
};

export default {
  state,
  actions,
  mutations,
  getters
}
