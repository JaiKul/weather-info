<template>
  <div>
    <WeatherDetails></WeatherDetails>
    <v-expansion-panels dark class="expansion-panels">
      <v-expansion-panel>
        <v-expansion-panel-header>Powered by</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col sm="12" md="6" lg="4">
                <v-img
                  contain
                  max-height="150"
                  alt="Open Weather Logo"
                  src="../assets/logo-open-weather.png"
                />
              </v-col>
              <v-col sm="12" md="6" lg="4">
                <v-img
                  contain
                  max-height="150"
                  alt="Vue logo"
                  src="../assets/logo-vue.png"
                />
              </v-col>
              <v-col sm="12" md="6" lg="4">
                <v-img
                  contain
                  max-height="150"
                  alt="Vuetify logo"
                  src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-text.svg"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <v-card dark color="#385F73" elevation="2"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherDetails from "../components/WeatherDetails.vue";

export default {
  name: "Home",
  components: {
    WeatherDetails,
  },
};
</script>

<style lang="scss" scoped>
.expansion-panels.theme--dark.v-expansion-panels .v-expansion-panel {
  background-color: #385f73;
}
</style>
