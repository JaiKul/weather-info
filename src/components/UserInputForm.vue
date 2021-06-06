<template>
  <v-card outlined color="#385F73">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-text-field
            class="city-input"
            v-model="city"
            @input="onCityInput"
            label="City"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select
            class="units-input"
            v-model="units"
            :items="unitSystems"
            item-text="text"
            item-value="value"
            label="Unit System"
            dense
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import debounce from "lodash.debounce";
export default {
  name: "UserInputForm",
  data: () => ({
    city: "",
    cityInput: "",
    units: "",
    unitSystems: [
      {
        text: "Standard",
        value: "standard",
      },
      {
        text: "Metric",
        value: "metric",
      },
      {
        text: "Imperial",
        value: "imperial",
      },
    ],
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  created() {
    this.city = this.$store.state.city;
    this.units = this.$store.state.units;
    this.onCityInput = debounce(this.fetchCityData, 500);
  },
  mounted() {
    this.applyWatchers();
  },
  methods: {
    applyWatchers() {
      this.$watch("units", this.fetchCityData);
    },
    fetchCityData() {
      this.$store.commit("setCity", this.city);
      this.$store.commit("setUnits", this.units);
      this.$store.dispatch("fetchCityData");
    },
  },
};
</script>

<style lang="scss" scoped>
.city-input,
.units-input,
.submit-button {
  display: inline-block;
}
</style>
