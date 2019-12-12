<template>
  <div>
    <div class="green--text display-3 text-center">
      {{ formatTime }}
    </div>
    <button v-on:click="start" v-if="!timerOn">Start</button>
    <button v-on:click="stop" v-if="timerOn">Stop</button>
  </div>
</template>

<script>

export default {
  name: 'timer',
  data() {
    return {
      hour: 23,
      min: 59,
      sec: 59,
      timerOn: false,
      timerObj: null,
    }
  },
  methods: {
    count: function() {
      if(this.min<=0 && this.sec<=0 && this.hour>=1){
        this.hour --;
        this.min = 59;
        this.sec = 59;
      }else if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; //timerがOFFであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.hour.toString(),
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1] + ":" + timeStrings[2]
    }
  }
}
</script>

