const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        setTimeout(() => {
          console.log(this.counter)
          this.counter = 0;
        }, 50)
      }
    }
    // name(value) {
    //   console.log('name ran');
    //   this.fullName = value ? value + ' ' + this.lastname : '';
    // },
    // lastName(value) {
    //   console.log('name ran');
    //   this.fullName = value ? this.name + ' ' + value: '';
    // }
  },
  computed: {
    // computedFullName() {
    //   console.log('computedFullName ran');
    //   return this.name ? this.name + ' Ramirez' : '';
    // }
  },
  methods: {
    outputFullName() {
      console.log('outputFullName ran');
      return this.name ? this.name + ' Ramirez' : '';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
