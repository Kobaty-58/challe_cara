<template>
  <v-card
    :loading="loading"
    
    max-width="374"
  >
    <v-img
      height="auto"
      src="../assets/i-01.jpg"
    ></v-img>

    <v-card-title>Interior</v-card-title>

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
        accountname
      </div>

      <v-col cols="12" md="6">
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
      </v-col>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
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