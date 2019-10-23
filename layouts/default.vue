<template>
  <v-app>
    <v-app-bar fixed app height="130px">
      <h1>Gigastream plc</h1>

      <v-spacer></v-spacer>
      <nuxt-link to="/"> <img width="150px" height="117px" src="gigastreamLogo150.gif"/></nuxt-link>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Gigastream plc 2019</span>
      <v-spacer></v-spacer
      ><span class="caption">The Gigastream logo is a registered trade mark of Gigastream plc.</span>
    </v-footer>
  </v-app>
</template>

<style>
.h2 {
  color: #f8981d;
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>
