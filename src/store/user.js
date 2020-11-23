import axios from '../axios';

const state = {
  token: localStorage.getItem('token') || '',
  user: null,
};

const mutations = {
  LOGIN_USER(state, data) {
    state.user = data.user;
    state.token = data.token;
  },
  REGISTER_USER(state, data) {
    state.user = data.user;
    state.token = data.token;
  },
  LOGOUT_USER(state) {
    state.user = null,
    state.token = ''
  }
};

const actions = {
  async login({ commit, dispatch }, user) {
    const response = await axios.post('http://localhost:3000/api/login', user);
    if(response.data) {
      localStorage.setItem('token', response.data.token);
      dispatch('setAuth');
      const data = {user: response.data.user, token: response.data.token}
      commit('LOGIN_USER', data);
    }
    return response;
  },

  async register({ commit, dispatch }, user) {
    const response = await axios.post('http://localhost:3000/api/register', user)
    if(response.data) {
      localStorage.setItem('token', response.data.token);
      dispatch('setAuth');
      const data = {user: response.data.user, token: response.data.token}
      commit('REGISTER_USER',data);
    }
    return response;
  },

  signOut({ commit }) {
    commit('LOGOUT_USER')
  
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization'];
  },

  setAuth() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization']= `Bearer ${token}`
  }
};

const getters = {
  isLoggedIn: state => {
    if(state.user || localStorage.getItem('token')) 
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