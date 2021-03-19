const app = Vue.createApp({
  data() {
    return {
      number: 0
    };
  },
  methods: {
    add(amount) {
      console.log('Add:', this.number);
      this.number += amount;
    }
  },
  computed: {
    result() {
      if (this.number == 37) {
        return this.number
      } else if (this.number < 37) {
        return 'Not there yet';
      } else {
        return 'Too much!';
      }
    }
  },
  watch: {
    result() {
      console.log('Watcher:', this.number);
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    }
  },
  compounded: {}
});

app.mount('#assignment');
