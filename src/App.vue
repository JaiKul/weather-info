<template>
  <v-app id="app">
    <!-- Title bar -->
    <v-app-bar
      id="nav"
      app
      elevate-on-scroll
      scroll-target="#scrolling-techniques"
      src="https://picsum.photos/1920/1080?random"
      contain="true"
      prominent
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="showDrawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Weather App</v-toolbar-title>
      <v-spacer></v-spacer>
      <user-input-form class="d-none d-sm-none d-md-flex"></user-input-form>
    </v-app-bar>
    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="showDrawer" app bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="selectedDrawerItemIndex"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="drawerItem in drawerItems"
            :key="drawerItem.text"
            :to="drawerItem.route"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ drawerItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ drawerItem.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Main page content -->
    <v-main id="scrolling-techniques" class="main-content">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong><router-link to="/about">About</router-link></strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import UserInputForm from "@/components/UserInputForm.vue";

export default {
  name: "App",
  components: {
    UserInputForm,
  },
  data: () => ({
    drawerItems: [
      {
        icon: "mdi-home",
        text: "Home",
        route: "/",
      },
      {
        icon: "mdi-information-variant",
        text: "About",
        route: "about",
      },
    ],
    showDrawer: false,
    selectedDrawerItemIndex: 0,
  }),
  created() {
    this.$store.dispatch("fetchCityData");
  },
};
</script>

<style lang="scss">
.main-content {
  background-color: #b0bec5;
}
</style>
