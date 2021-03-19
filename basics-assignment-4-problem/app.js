const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      isVisible: true,
      visibleClass: '',
      bgColor: ''
    };
  },
  methods: {
    toggleParagraph() {
      this.isVisible = !this.isVisible;
    }
  },
  computed: {
    pClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        vissible: this.isVisible,
        hidden: !this.isVisible
      }
    }
  }
});

app.mount('#assignment');
