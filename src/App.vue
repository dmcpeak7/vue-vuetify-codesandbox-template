<template>
  <v-app>
    <div class="img">
      <img src="signalteam.png" class="logo">
    </div>
    <v-toolbar class="light-blue darken-2">
      <v-toolbar-items class="buttons hidden-sm-and-down">
        <v-btn to="/" flat>About</v-btn>
        <v-btn to="/crew" flat>The Crew</v-btn>
        <v-btn to="/contact" flat>Contact</v-btn>
        <v-btn to="/troubleshoot" flat>Troubleshooting</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-content>About</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/crew">
            <v-list-tile-content>Crew</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/contact">
            <v-list-tile-content>Contact</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/troubleshoot">
            <v-list-tile-content>Troubleshoot</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content class="color">
      <router-view></router-view>
    </v-content>
    <v-footer class="light-blue darken-2">&copy; Mount Vernon Nazarene University</v-footer>
  </v-app>
</template>

<script>
import About from "./components/About";
import Crew from "./components/Crew";
import Contact from "./components/Contact";
import Troubleshoot from "./components/Troubleshoot";

export default {
  name: "App",
  components: {
    About,
    Contact,
    Crew,
    Troubleshoot
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.logo {
  max-height: 200px;
  max-width: 100%;
}
.img {
  background-color: #00B7F0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.buttons {
  justify-content: center;
}
.color {
  background-color: grey;
}
.light-blue {
  padding-left: 15px;
}
</style>

