const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    submitForm(e) {
      // e.preventDefault();
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
