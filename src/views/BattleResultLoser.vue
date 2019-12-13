<template>
<v-row align="center" justify="center">
    <v-img
      src="../assets/b-01.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      width="350"
      height="300"
    >
        <v-card-title class="blue--text display-4">Lose</v-card-title>
    </v-img>
    <div class="display-1">Battle01</div>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-row>

      <div class="my-4 title black--text">
        accountname
      </div>
      <v-btn @click="$router.go(-1)" color="green light-1" block height="50" dark class="display">Back</v-btn>
    </v-card-text>
</v-row>
</template>