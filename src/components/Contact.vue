<template>
  <v-container class="container">
    <v-text-field value="(740)-324-5545" label="Phone Number" prepend-icon="call" class="disable"></v-text-field>

    <v-text-field
      label="email"
      value="mvnusignalteam@gmail.com"
      prepend-icon="email"
      color="#000"
      class="disable"
    ></v-text-field>

    <v-text-field
      label="Our current office location"
      value="Corner room in Pioneer Dorm Lobby"
      prepend-icon="location_on"
      class="disable"
    ></v-text-field>
    <v-btn
      target="blank"
      href="https://support.mvnu.edu/"
      class="grey"
    >Click me to submit a support ticket!</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({})
};
</script>

<style>
.disable {
  color: black !important;
  pointer-events: none;
}

.section {
  font-size: 18px;
  padding: 15px;
}

.jirabutton {
  justify-content: center;
  color: blue;
  margin: auto;
}

.container {
  margin: 25px;
  justify-content: center;
  margin: auto;
}
</style>
