const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: ''
    };
  },
  methods: {
    buttonPressed() {
      alert('Button pressed!');
    },
    updateFirstInput(e) {
      this.output1= e.target.value;
    },
    updateSecondInput(e) {
      this.output2 = e.target.value;
    }
  }
});

app.mount('#assignment');
