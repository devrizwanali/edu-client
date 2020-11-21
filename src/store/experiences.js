import axios from 'axios';

const state = {
  experience: null,
  experiences: []
};

const mutations = {
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences
  },

  SET_EXPERIENCE(state, experience) {
    state.experience = experience
  }
};

const actions = {
  async getExperience({commit}, id) {
    axios.get(`http://localhost:3000/api/experiences/${id}`)
     .then(res => {
       commit('SET_EXPERIENCE', res.data.experience)
     })
     .catch(error => {
       console.log(error)
     })
  },

  async getExperiences({commit}) {
    axios.get(`http://localhost:3000/api/experiences`)
     .then(res => {
       commit('SET_EXPERIENCES', res.data.experiences)
     })
     .catch(error => {
       console.log(error)
     })
  }
};

const getters = {
  experience: state => state.experience,
  experiences: state => state.experiences
};

export default {
  state,
  actions,
  mutations,
  getters
}
