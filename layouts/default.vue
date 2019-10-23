<template>
  <v-app>
    <v-toolbar min-height="130px" max-height="130px">
      <v-toolbar-title>Gigastream plc</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn href="/places" nuxt text>where we are</v-btn>

        <v-btn href="/nominet" nuxt text>Nominet Info</v-btn>
        <v-btn href="/technical" nuxt text>technical information</v-btn>
        <nuxt-link to="/"> <img class="mt-1" src="@/assets/gigastreamLogo150.gif"/></nuxt-link>
      </v-toolbar-items>
    </v-toolbar>

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
