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
    <v-btn v-on:click='submit_form' variant="outline-success" color="green" dark large>送信</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'form-wrapper',
  data() {
    return {
    form_data: {
      name: '',
      cont_type: 'news',
      cont: '',
    },
    cont_types: [{ text: 'Normal', value: 'normal'}, { text: 'Battle', value: 'battle'},{ text: 'Interior', value: 'interior'},{ text: 'Recipe', value: 'recipe'}],
    id_last: '0',
    post_message: false,
    post_validation: false,
    spinner: false,
    card_form_cont: true
    }
  },
  created:
  function() {
    firebase.firestore().collection("posted_data").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

          if (Number(doc.data().id) > Number(this.id_last)){
            this.id_last = doc.data().id
          }

        }.bind(this));
    }.bind(this));
  },
  methods: {
    submit_form: function() {
      if (this.form_data.name=='' || this.form_data.cont==''){
        this.post_validation = true;
        setTimeout(function(){this.post_validation = false;}.bind(this), 2000);
        return
      }

      this.id_last = String( Number(this.id_last) + 1 );

      firebase.firestore().collection("posted_data").add({
          id: this.id_last,
          name: this.form_data.name.trim(),
          cont_type: this.form_data.cont_type.trim(),
          cont: this.form_data.cont.trim()
      });

      this.form_data.name = ''
      this.form_data.cont_type = 'news'
      this.form_data.cont= ''

      this.card_form_cont = false;
      this.spinner = true;
      setTimeout(function(){this.card_form_cont = true}.bind(this), 700);
      setTimeout(function(){this.spinner = false;}.bind(this), 700);

      this.post_message = true;
      setTimeout(function(){this.post_message = false;}.bind(this), 2000);
    }
  }
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