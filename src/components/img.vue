<template>
    <div id="inspire">
      <v-content>
        <v-container fluid>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <img :src="imageUrl" height="150" v-if="imageUrl">
              <v-text-field
                label="Select Image"
                @click="pickFile"
                v-model="imageName"
                prepend-icon="mdi-file"
              ></v-text-field>
              <input
                type="file"
                style="display: none"
                ref="image"
                accept="image/*"
                @change="onFilePicked"
              >

              <!-- <v-btn color="primary" @click="upload">アップロード</v-btn> -->
            </v-flex>
          </v-layout>

          <!-- <br> -->

          <!-- <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <div v-for="(i,index) in imgUrls" v-bind:key="index">
                <br>
                <img :src="i.downloadURL" height="150">
              </div>
            </v-flex>
          </v-layout> -->
        </v-container>
      </v-content>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from "../main.js";

export default {
    name: "App",
  data() {
    return {
      photo: null,
      photo_url: null,
      dialog: false,
      imageName: "",
      imageUrl: "",
      imageFile: "",
      imgUrls: []
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages: function() {
      db.collection("images")
        .get()
        .then(snap => {
          const array = [];
          snap.forEach(doc => {
            array.push(doc.data());
          });
          this.imgUrls = array;
        });

      this.imageName = "";
      this.imageFile = "";
      this.imageUrl = "";
    },

    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },

    //画像アップロード処理
    upload: function() {
      // ストレージオブジェクト作成
      var storageRef = firebase.storage().ref();
      // ファイルのパスを設定
      var mountainsRef = storageRef.child(`images/${this.imageName}`);
      // ファイルを適用してファイルアップロード開始
      mountainsRef.put(this.imageFile).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          this.imageUrl = downloadURL;
          db.collection("images").add({
            downloadURL,
            timestamp: Date.now()
          });
          this.getImages();
        });
      });
    }
  },
  components: {}
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>