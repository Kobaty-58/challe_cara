<template>
  <v-container fluid>
    <v-card
      class="mx-auto"
      color="#0000ff"
      dark
      max-width="350"
    >
      <v-col>
        <v-img src="../assets/b-01.jpg"></v-img>
      </v-col>
    </v-card>
    <div class="green--text display-3 text-center">VS</div>
    <v-card
      class="mx-auto"
      color="red"
      dark
      max-width="350"
    >
      <v-col>
        <v-img src="../assets/b-02.jpg"></v-img>
      </v-col>
    </v-card>
    <v-col cols="12" sm="6">
      <div class="text-center">
        <div class="my-2">
          <router-link :to="'/in-battle-red'">
            <v-btn color="red" dark large>RED</v-btn>
          </router-link>
          <router-link :to="'/in-battle-blue'">
            <v-btn color="#0000ff" dark large>BLUE</v-btn>
          </router-link>
        </div>
      </div>
    </v-col>
  </v-container>
</template>