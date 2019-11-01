<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item href="/" nuxt>
          <v-list-item-action>
            Home
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="/places" nuxt>
          <v-list-item-action>
            Where we are
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="/technical" nuxt>
          <v-list-item-action>
            Technical Info
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="/nominet" nuxt>
          <v-list-item-action>
            Nominet
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Gigastream plc</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row style="margin-top:70px;" justify="end">
          <nuxt-link to="/"> <img height="117px" width="150px" src="/gigastreamLogo.png"/></nuxt-link>
        </v-row>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app class="caption">
      <span>&copy; Gigastream plc 2019</span>
      <v-spacer></v-spacer>
      <span> The Gigastream logo is a registered trade mark of Gigastream plc.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
