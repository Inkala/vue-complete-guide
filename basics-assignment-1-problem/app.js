const app = Vue.createApp({
  data() {
    return {
      name: 'Marcela',
      age: 33,
      image: 'https://www.thesprucepets.com/thmb/svw9xgcobToAwVEmK-WhFYPNZfM=/1500x1000/filters:fill(auto,1)/breed_profile_corgi_1117986_hero_917-6ed2ed41b6e641bb98221b13a1d83a86.jpg',
      textValue: "Test value"
    };
  },
  methods: {
    randomNumber() {
      return Math.random().toFixed(2);
    }
  }
});

app.mount('#assignment');
