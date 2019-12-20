<template>
  <div id='form-wrapper'>
    <transition name='post-alert'>
      <v-alert v-show='post_message' class="success" show>内容が投稿されました！</v-alert>
    </transition>
    <transition name='post-validataion'>
      <v-alert v-show='post_validation' class="error" show>内容を入力して下さい</v-alert>
    </transition>
    <v-card>
        <v-card-text>
            <div v-show='spinner' class="text-center">
                <v-progress-circular
                indeterminate
                color="green"
                ></v-progress-circular>
            </div>
            <v-form
            id="input-group-name"
            >
                <v-text-field
                id="input-name"
                v-model="form_data.name"
                label="Name"
                required
                ></v-text-field>
            </v-form>
            <v-form
            id="input-group-cont_type"
            >
                <v-select
                id="input-cont_type"
                v-model="form_data.cont_type"
                :items="cont_types"
                label="Select"
                required
                ></v-select>
            </v-form>

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

            </v-flex>
          </v-layout>


            <v-form
            id="input-group-cont"
            >
                <v-textarea
                id="input-cont"
                v-model="form_data.cont"
                label="Text"
                rows="3"
                max-rows="6"
                required
                ></v-textarea>
            </v-form>
        </v-card-text>
    </v-card>
    <v-btn variant="outline-success" color="green"  v-on:click='upload' dark large>送信</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase';
//import Imge from '../components/img.vue';
import { db } from "../main.js";

export default {
  name: 'form-wrapper',
  components:{
    //Imge
  },
  data() {
    return {
    form_data: {
      name: '',
      cont_type: '',
      cont: '',
    },
    photo: null,
    photo_url: null,
    dialog: false,
    imageName: "",
    imageUrl: "",
    imageFile: "",
    imgUrls: [],
    cont_types: [{ text: 'Normal', value: 'normal'}, { text: 'Battle', value: 'battle'},{ text: 'Interior', value: 'interior'},{ text: 'Recipe', value: 'recipe'}],
    id_last: '0',
    post_message: false,
    post_validation: false,
    spinner: false,
    card_form_cont: true
    }
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages: function() {
      db.collection("postdata")
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
    upload: function() {
      // ストレージオブジェクト作成
      var storageRef = firebase.storage().ref();
      // ファイルのパスを設定
      var mountainsRef = storageRef.child(`images/${this.imageName}`);

      if (this.form_data.name=='' || this.form_data.cont==''){
        this.post_validation = true;
        setTimeout(function(){this.post_validation = false;}.bind(this), 2000);
        return
      }
      this.id_last = String( Number(this.id_last) + 1 );
      // ファイルを適用してファイルアップロード開始
      mountainsRef.put(this.imageFile).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          this.imageUrl = downloadURL;
          // const time = Date.now().toString;
          db.collection("postdata").add({     
            id: this.id_last,
            name: this.form_data.name.trim(),
            cont_type: this.form_data.cont_type.trim(),
            cont: this.form_data.cont.trim(),       
            downloadURL,
            timestamp: Date.now()
          });
          this.form_data.name = ''
          this.form_data.cont= ''
          this.form_data.cont_type = 'news'

          this.card_form_cont = false;
          this.spinner = true;
          setTimeout(function(){this.card_form_cont = true}.bind(this), 700);
          setTimeout(function(){this.spinner = false;}.bind(this), 700);

          this.post_message = true;
          setTimeout(function(){this.post_message = false;}.bind(this), 2000);

          this.getImages();
        });
      });

      

      this.post_message = true;
      setTimeout(function(){this.post_message = false;}.bind(this), 2000);
    },
  },
}

</script>

<style>
#form-card {
  margin: 0 auto;
}
#spinner {
  height:180px;
  padding-top:90px;
}

.post-alert-enter-active, .post-alert-leave-active {
  transition: opacity 2s, transform 1.5s;
}
.post-alert-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.post-alert-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.post-validataion-enter-active, .post-validataion-leave-active {
  transition: opacity 1s, transform 1s;
}
.post-validataion-enter, .post-validataion-leave-to {
  opacity: 0;
  transform: translateY(-50px);
} 
</style>