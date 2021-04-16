const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      listIsVissible: true
    };
  },
  computed: {
    buttonCaption() {
      return this.listIsVissible ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    toggleList() {
      console.log('Clicked to', this.listIsVissible);
      
      this.listIsVissible = !this.listIsVissible;
    }
  }
});

app.mount('#assignment');
