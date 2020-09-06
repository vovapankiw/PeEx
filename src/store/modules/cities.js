const cities = {
  state: {
    cities: [
      {
        id: 1,
        name: 'Lviv'
      },
      {
        id: 2,
        name: 'Amsterdam'
      }
    ],
  },
  getters: {
    getCityById: (state) => (id) => {
      const city = state.cities.find(city => city.id === id);

      if (city !== undefined) {
        return city.name;
      } else {
        return new Error('City was not found');
      }
    },
  },
  mutations: {},
  actions: {}
}

export  default  cities;