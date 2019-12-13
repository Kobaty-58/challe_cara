<template>
  <v-container fluid>
    <v-row dense>
<<<<<<< HEAD
      <v-col v-for="detail in details" :key="detail.id">
        <v-card>
          <router-link :to="`/detail/${detail.id}`">
            <v-img :src="detail.imgSrc" class="white--text align-end" width="350px" height="300px">
              <v-card-title v-text="detail.title"></v-card-title>
=======
        <v-col v-for="photo in photos" :key="photo.id" :photo="photo">
        <router-link :to="`/photo/${photo.id}`">
          <v-card>
              <v-img :src="photo.imgSrc" class="white--text align-end" width="350px" height="300px">
              <v-card-title v-text="photo.title"></v-card-title>
>>>>>>> c4586d8b1ad178bab4d760f0f0b88eca8d7aacbd
            </v-img>
          </router-link>
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
