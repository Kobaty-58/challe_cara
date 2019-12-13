<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="detail in details" :key="detail.id">
        <v-card>
          <router-link :to="`/detail/${detail.id}`">
            <v-img :src="detail.imgSrc" class="white--text align-end" width="350px" height="300px">
              <v-card-title v-text="detail.title"></v-card-title>
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

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data: () => {
    return {
        details: [
          {
            id: 1,
            title: 'interior01',
            imgSrc: require('../assets/i-01.jpg')
          },
          {
            id: 2,
            title: 'recipe01',
            imgSrc: require('../assets/r-01.jpg')
          },
          {
            id: 3,
            title: 'battle01',
            imgSrc: require('../assets/b-01.jpg')
          },
          {
            id: 4,
            title: 'recipe04',
            imgSrc: require('../assets/r-04.jpg')
          },
          {
            id: 5,
            title: 'interior03',
            imgSrc: require('../assets/i-03.jpg')
          },
          {
            id: 6,
            title: 'battle02',
            imgSrc: require('../assets/b-02.jpg')
          },
          {
            id: 7,
            title: 'recipe02',
            imgSrc: require('../assets/r-02.jpg')
          },
          {
            id: 8,
            title: 'interior04',
            imgSrc: require('../assets/i-04.jpg')
          },
          {
            id: 9,
            title: 'recipe03',
            imgSrc: require('../assets/r-03.jpg')
          },
          {
            id: 10,
            title: 'interior02',
            imgSrc: require('../assets/i-02.jpg')
          },
        ]
      }
    }
  }
</script>
