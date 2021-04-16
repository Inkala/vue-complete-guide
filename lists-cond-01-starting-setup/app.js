const app = Vue.createApp({
  data() {
    return {
      goals: [],
      currentGoal: '',
      info: { name: 'Marce', age: 33, city: 'Barcelona' }
    };
  },
  methods: {
    addGoal(goal) {
      this.goals.push(goal);
      this.currentGoal = '';
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
