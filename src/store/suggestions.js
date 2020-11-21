import axios from 'axios';

const state = {
  suggestion: null,
  suggestions: []
};

const mutations = {
  SET_SUGGESTIONS(state, suggestions) {
    state.suggestions = suggestions
  },

  SET_SUGGESTION(state, suggestion) {
    state.suggestion = suggestion
  }
};

const actions = {
  async getSuggestion({commit}, id) {
    await axios.get(`http://localhost:3000/api/suggestions/${id}`)
     .then(res => {
       commit('SET_SUGGESTION', res.data.suggestion)
     })
     .catch(error => {
       console.log(error)
     })
  },

  async getSuggestions({commit}) {
    await axios.get(`http://localhost:3000/api/suggestions`)
     .then(res => {
       commit('SET_SUGGESTIONS', res.data.suggestions)
     })
     .catch(error => {
       console.log(error)
     })
  },

  async updateSuggestion({commit}, params) {
    const res =  await axios.put(`http://localhost:3000/api/suggestions/${params.id}`, params.suggestion)
    return res
  },

  async deleteSuggestion({commit}, id) {
    const res =  await axios.delete(`http://localhost:3000/api/suggestions/${id}`)
    if(res.data) {
      const suggest = state.suggestions.find(x => x.id === id)
      let index = state.suggestions.indexOf(suggest)
      const suggestions = state.suggestions.slice(0, index)
      commit('SET_SUGGESTIONS', suggestions)
    }
  },

  async createSuggestion({commit, state}, suggestion) {
    const res = await axios.post(`http://localhost:3000/api/suggestions`, suggestion)
    if(res.data) {
      state.suggestions.push(res.data.suggestion)
    }
    return res;
  }
};

const getters = {
  suggestion: state => state.suggestion,
  suggestions: state => state.suggestions
};

export default {
  state,
  actions,
  mutations,
  getters
}
