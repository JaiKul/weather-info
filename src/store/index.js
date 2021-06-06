import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "London",
    cityData: {},
    isLoading: false,
    units: "metric",
  },
  mutations: {
    setCity(state, cityName) {
      state.city = cityName;
    },
    setCityData(state, payload) {
      state.cityData = payload;
    },
    setLoadingStatus(state, status) {
      state.isLoading = status;
    },
    setUnits(state, unitSystem) {
      if (["standard", "metric", "imperial"].indexOf(unitSystem) === -1) {
        unitSystem = "standard";
      }
      state.units = unitSystem;
    },
  },
  actions: {
    fetchCityData(context) {
      context.commit("setLoadingStatus", true);
      let url = `//api.openweathermap.org/data/2.5/weather?q=${context.state.city}&units=${context.state.units}&appid=fa7d36a61dab610f0a975b3c3d359e9f`;
      axios.get(url).then((response) => {
        context.commit("setLoadingStatus", false);
        if (response.status === 200) {
          console.log(response);
          context.commit("setCityData", response.data);
        }
      });
    },
  },
  getters: {
    cityWeatherDetails(state) {
      return state.cityData; //ToDo: filter out unnecessary details
    },
  },
});
