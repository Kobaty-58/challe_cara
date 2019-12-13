<template>
  <v-container fluid>
    <router-link :to="'/battle-result-winner'">
    <v-card
      class="mx-auto"
      color="#0000ff"
      dark
      max-width="350"
    >
      <v-col>
        <v-img src="../assets/b-01.jpg">
        <v-card-title class="green--text display-4">Win</v-card-title>
        </v-img>
      </v-col>
    </v-card>
    </router-link>
    <router-link :to="'/battle-result-loser'">
    <v-card
      class="mx-auto"
      color="red"
      dark
      max-width="350"
    >
      <v-col>
        <v-img src="../assets/b-02.jpg">
        <v-card-title class="green--text display-4">Lose</v-card-title>
        </v-img>
      </v-col>
    </v-card>
    </router-link>
  </v-container>
</template>