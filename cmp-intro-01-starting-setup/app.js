const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'andre',
          name: 'Andrea Juncal',
          phone: '345 987 234',
          email: 'andre.junc@mail.com'
        },
        {
          id: 'nata',
          name: 'Natalia Ramirez',
          phone: '668 745 522',
          email: 'nata.ram@mail.com'
        }
      ]
    };
  }
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVissible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVissible: false,
      friend: {
        id: 'andre',
        name: 'Andrea Juncal',
        phone: '345 987 234',
        email: 'andre.junc@mail.com'
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVissible = !this.detailsAreVissible;
    }
  },
});

app.mount('#app');
