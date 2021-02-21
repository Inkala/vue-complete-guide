const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h3>Master Vue and build amazing apps!</h3>',
      vueUrl: 'http://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumer = Math.random();
      return randomNumer < 0.5 ? this.courseGoalA : this.courseGoalB;  
    }
  }
});

app.mount('#user-goal');