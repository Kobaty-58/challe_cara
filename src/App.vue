<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>

        <router-link :to="'/'">
          <v-list-item link>
            <v-list-item-action>
              <v-icon large color="green lighten-1">mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link :to="'/post'">
          <v-list-item link>
            <v-list-item-action>
              <v-icon large color="green lighten-1">mdi-pencil</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Post</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item link>
          <v-list-item-action>
            <v-icon large color="green lighten-1">mdi-trophy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Battle</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon large color="green lighten-1">mdi-sofa</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Interior</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <router-link :to="'/recipe'">
          <v-list-item link>
            <v-list-item-action>
              <v-icon large color="green lighten-1">mdi-pot</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Recipe</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green lighten-1" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>リボベジ</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view>
        <Home></Home>
      </router-view>
    </v-content>

  </v-app>
</template>

<script>
//import Card from './components/Card.vue';
import Home from './views/Home.vue';

export default {
  props: {
    source: String
  },
  components: {
    //Card,
    Home
  },
  data: () => ({
    drawer: null
  })
};
</script>