<template>
<div class='interior'>
<v-container fluid>
    <v-row dense>
      <v-col v-for="interior in interiors" :key="interior.id">
        <router-link :to="`/interior/${interior.id}`">
          <v-card>
            <v-img :src="interior.imgSrc" class="white--text align-end" width="350px" height="300px">
              <v-card-title v-text="interior.title"></v-card-title>
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
  name: 'interior',
  components: {
    // HelloWorld
  },
  data: () => {
    return {
        interiors: [
          {
            id: 1,
            title: 'interior01',
            imgSrc: require('../assets/i-01.jpg')
          },
          {
            id: 2,
            title: 'interior02',
            imgSrc: require('../assets/i-02.jpg')
          },
          {
            id: 3,
            title: 'interior03',
            imgSrc: require('../assets/i-03.jpg')
          },
        ]
      }
    }
  }
</script>