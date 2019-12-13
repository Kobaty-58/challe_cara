<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Select an option"
        ></v-select>
      </v-col>
    </v-row>
    <v-text-field
        label="Input"
        required
    ></v-text-field>
    <div class="text-center">
    <v-btn color="green" dark large>Post</v-btn>
    <v-btn color="#ccff99" dark large>Clear</v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['Normal', 'Interior', 'Battle', 'Recipe'],
    }),
  }
</script>