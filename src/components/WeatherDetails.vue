<template>
  <div>
    <v-container>
      <v-row v-if="details.main">
        <v-col lg="4" md="6" sm="12">
          <v-card>
            <v-list subheader>
              <v-subheader>Temperature</v-subheader>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-thermometer</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ details.main.temp }}</v-list-item-title>
                  <v-list-item-subtitle
                    >Current Temperature</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.main.feels_like
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Feels like</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-thermometer-high</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.main.temp_max
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Today's High</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-thermometer-low</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.main.temp_min
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Today's Low</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col lg="4" md="6" sm="12">
          <v-card>
            <v-list subheader>
              <v-subheader>Weather</v-subheader>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-weather-partly-cloudy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.weather[0].main
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    details.weather[0].description
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-eye</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.visibility
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Visibility</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-air-filter</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.main.humidity
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Humidity</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-arrow-collapse-all</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    details.main.pressure
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Pressure</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col lg="4" md="6" sm="12">
          <v-card>
            <v-list subheader>
              <v-subheader>Day Light</v-subheader>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-weather-sunset-up</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ sunrise }}</v-list-item-title>
                  <v-list-item-subtitle>Sunrise</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-weather-sunset-down</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ sunset }}</v-list-item-title>
                  <v-list-item-subtitle>Sunset</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay :absolute="true" :value="$store.state.isLoading">
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "WeatherDetails",
  data() {
    return {
      showAlert: false,
    };
  },
  computed: {
    details() {
      return this.$store.state.cityData;
    },
    sunrise() {
      return this.details ? this.getTime(this.details.sys.sunrise) : "–";
    },
    sunset() {
      return this.details ? this.getTime(this.details.sys.sunset) : "–";
    },
  },
  methods: {
    getTime(time) {
      return new Date(time).toTimeString();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
