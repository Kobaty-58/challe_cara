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
        label="Post"
        required
    ></v-text-field>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['Post', 'Interior', 'Battle', 'Recipe'],
    }),
  }
</script>