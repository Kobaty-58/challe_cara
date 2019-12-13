<template>
  <v-container>
    <v-img
      height="300"
      width="374"
      src="../assets/r-01.jpg"
    ></v-img>

    <v-card-title class="headline">豆苗とツナの卵かけご飯</v-card-title>

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

      <div class="my-4 subtitle-1 black--text">
        John Doe
      </div>

      <h2>材料</h2>
      <li>豆苗：１/３袋</li>
      <li>ツナ缶：１缶</li>
      <li>マヨネーズ：大さじ１</li>
      <li>卵黄：卵１個分</li>
      <li>ご飯：１膳分</li>
      <li>醤油：お好み</li>
      <li>七味唐辛子：お好み</li>
      <h2>調理法</h2>
      <span>下準備</span>
      <p>豆苗を食べやすい大きさに切る</p>
      <p>1.ツナ缶１缶、マヨネーズ大さじ１を加えよく混ぜる</p>
      <p>2.器にご飯を盛り付け、その上に１をのせる</p>
      <p>3.卵黄を加えお好みで醤油や七味唐辛子などをかけ混ぜ合わせて食べる</p>
    
    </v-card-text>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>