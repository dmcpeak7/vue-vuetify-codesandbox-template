<template>
  <v-container>
    <v-flex>
    <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">Where can I get wifi on campus?</div>
          </template>
          <v-card>
            <v-card-text
              class="blue darken-0"
            >Wifi is available in areas marked in blue. Future areas are marked in green.</v-card-text>
            <v-img
              src="/CampusLabMap.jpg"
              lazy-src="/CampusLabMap.jpg"
            ></v-img>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>

      <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">How do I force the sign in page on my device? (Splash Page)</div>
          </template>
          <v-card>
            <v-card-text
              class="blue darken-0"
            >You can either forget the wifi network in your wifi settings, or try going to something like 5.5.5.5 in your browser.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>

      <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">Is there a reason why some games don't work on my xbox?</div>
          </template>
          <v-card>
            <v-card-text class="blue darken-0">
              We have recently found that games such as Gang Beasts and Grand Theft Auto do not work on the wifi. We are working on a
              solution but currently do not know when it would be fixed. If you are having problems with a different game, please send us a message!
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>

      <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">How can I contact Signal Team?</div>
          </template>
          <v-card>
            <v-card-text
              class="blue darken-0"
            >You can email us, text us, or come visit us at our office!</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>

      <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">When is Signal Team available to help me?</div>
          </template>
          <v-card>
            <v-card-text
              class="blue darken-0"
            >Student Technicians for Signal Team are usually assigned a 5:00 pm - 8:00 pm shift.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>

      <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">Why is the wifi so bad in my dorm room/apartment?</div>
          </template>
          <v-card>
            <v-card-text
              class="blue darken-0"
            >It's possible that you're connected to the WAP(Wireless Acess Point) in the room/apartment next to you. You can check this by going to my.meraki.com and see what the name of the access point is. If you're connected to a neighbors, try turning your wifi off and back on and it should reconnect you.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>

      <v-expansion-panel class="panel">
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
          :class="{'light-blue darken-2': i % 2 === 0}"
        >
          <template v-slot:header>
            <div class="bold">How do I submit a support ticket?</div>
          </template>
          <v-card>
            <v-card-text class="blue darken-0">You can submit a ticket by going to support.mvnu.edu</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-divider/>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Troubleshoot",
  data: () => ({})
};
</script>

<style>
.bold {
  font-weight: bold;
  margin: 12px;
}
.panel {
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: center;
  align-content: center;
}
</style>

