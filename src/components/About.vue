<template>
  <v-flex>
    <v-container>
      <section>
        <v-card class="boxtext" flat color="transparent" justify-center>
          <h1 class="text">
            The Signal Team was created to be there for the students.
            Motherboard takes care of everyone across campus, most of the
            time it's professors that call motherboard for help during the
            day. This can take time away from students that are needing help
            with their stuff. Signal Team's working hours were created to be
            at times when most students would be available.
          </h1>
        </v-card>
      </section>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: "About",
  data: () => ({})
};
</script>

<style>
.text {
  font-size: 20px;
  text-align: center;
  font-weight: regular;
}
.boxtext {
  text-align: center;
  margin: auto;
  justify-content: center;
}
</style>
