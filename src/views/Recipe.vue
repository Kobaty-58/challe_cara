<template>
<div class='recipe'>
<v-container fluid>
    <v-row dense>
      <v-col v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="`/recipe/${recipe.id}`">
          <v-card>
            <v-img :src="recipe.imgSrc" class="white--text align-end" width="350px" height="300px">
              <v-card-title v-text="recipe.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'recipe',
  components: {
    // HelloWorld
  },
  data: () => {
    return {
        recipes: [
          {
            id: 1,
            title: 'recipe01',
            imgSrc: require('../assets/r-01.jpg')
          },
          {
            id: 2,
            title: 'recipe02',
            imgSrc: require('../assets/r-02.jpg')
          },
          {
            id: 3,
            title: 'recipe03',
            imgSrc: require('../assets/r-03.jpg')
          },
        ]
      }
    }
  }
</script>