<template>

<v-container fluid class="pa-0">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <router-link :to="'/battle'">
                <v-btn color="#A0E0F0" dark large>battle</v-btn>
            </router-link>
            <v-btn color="#F0F080" dark large>result</v-btn>
          </div>
          </div>
      </v-col>
    </v-row>
    <v-col v-for="n of 10" :key="n"><!--とりあえず１０回-->
    <router-link :to="'/battle-result-detail'">
    <v-card
      class="mx-auto"
      color="#F0F080"
      dark
      max-width="400"
    >
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="green--text display-1 text-left">Win</v-list-item-title>
          <v-list-item-title class="green--text display-1 text-right">Lose</v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>


      </v-list-item>
    </v-card-actions>
  </v-card>
    </router-link>
    </v-col>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>