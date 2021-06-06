<template>
  <div class="about">
    <v-card>
      <v-card-title>About the site</v-card-title>
      <v-card-text>
        <p>
          The developer created this site as a side project while learning
          VueJs. This is not meant and won't be used for commerical purposes.
          <br />
          It uses a non-premium account to fetch data from OpenWeather API.
        </p>
        <p>
          The project was created using vue-cli and uses Vuetify, Vuex, Vue
          router. But it isn't necessarily showcasing their best use. You may
          use this as a reference for creating similar application and/or to get
          a better understanding of the few features used here.
        </p>
      </v-card-text>
    </v-card>
    <br />
    <v-list rounded>
      <v-subheader>Developer Details</v-subheader>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <a href="https://www.linkedin.com/in/jaisk/" target="_blank">
              LinkedIn Profile
            </a>
          </v-list-item-title>
          <v-list-item-subtitle>Let's connect!</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-github</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <a href="https://github.com/JaiKul" target="_blank">
              GitHub Profile
            </a>
          </v-list-item-title>
          <v-list-item-subtitle>
            Nothing much, but code for this project!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-blogger</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <a href="https://jsjaik.blogspot.com/" target="_blank">My Blog</a>
          </v-list-item-title>
          <v-list-item-subtitle>
            An old attempt to write tech blogs
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
