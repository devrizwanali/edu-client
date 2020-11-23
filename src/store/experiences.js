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
  },

  async updateExperience({commit}, params) {
    const res =  await axios.put(`http://localhost:3000/api/experiences/${params.id}`, params.experience)
    return res
  },

  async deleteExperience({commit}, id) {
    const res =  await axios.delete(`http://localhost:3000/api/experiences/${id}`)
    if(res.data) {
      const suggest = state.experiences.find(x => x.id === id)
      let index = state.experiences.indexOf(suggest)
      const experiences = state.experiences.slice(0, index)
      commit('SET_EXPERIENCES', experiences)
    }
  },

  async createExperience({commit, state}, experience) {
    const res = await axios.post(`http://localhost:3000/api/experiences`, experience)
    if(res.data) {
      state.experiences.push(res.data.experience)
    }
    return res;
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
