
const user = {
  state: {
    user: {
      id: 1,
      name: 'Vova',
      surname: '',
      age: '',
    }
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    setUser(state, user) {
      this.state.user = user;
    }
  },
  actions: {
    setUser({ commit }, value) {
      commit('setUser', value);
    }
  }
}

export default user;