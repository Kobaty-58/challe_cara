<template>
  <v-container fluid>
    <v-row dense>

        <v-col v-for="photo in photos" :key="photo.id" :photo="photo">
        <router-link :to="`/photo/${photo.id}`">
          <v-card>
              <v-img :src="photo.imgSrc" class="white--text align-end" width="350px" height="300px">
              <v-card-title v-text="photo.title"></v-card-title>

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
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

import { db } from '@/main'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data: () => {
    return {
      photos: []
    }
  },
  firestore() {
    return {
      photos: db.collection('photos')
    }
  }  
}
</script>
