<template>
<v-container>
    <v-img
      height="250"
      src="../assets/b-02.jpg"
    ></v-img>

    <v-card-title class="my-2 display-1 red--text">Battle01</v-card-title>

    <v-card-text>

      <div class="my-2 subtitle-1 red--text">残り時間</div>

      <Timer></Timer>

      <div class="my-2 subtitle-1 red--text">票数</div>

      <Pointer></Pointer>

      <v-btn @click="$router.go(-1)" color="green light-1" block height="50" dark class="my-4 display">Back</v-btn>

    </v-card-text>

  
</v-container>
</template>

<script>

import Timer from '../components/Timer.vue'
import Pointer from '../components/Pointer.vue'

export default {
    name: 'battle-result-red',
    components:{
      Timer,
      Pointer
    }
}
</script>