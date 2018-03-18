var app = new Vue({
  el: '#app',
  data: {
    items: [],
    text: '',
    author: '',
    readReview: 0,
    show: 'all',
    drag: {},
  },
  created: function() {
    this.getItems();
  },
  computed: {
    activeItems: function() {
      return this.items.filter(function(item) {
	    return !item.completed;
      });
    },
    filteredItems: function() {
      if (this.show === 'active')
	      return this.items.filter(function(item) {
	        return !item.completed;
	      });
      if (this.show === 'completed')
	      return this.items.filter(function(item) {
	        return item.completed;
	      });
      return this.items;
    },
  },
  methods: {
    getItems: function() {
      axios.get("http://localhost:3000/api/items").then(response => {
	      this.items = response.data;
	      return true;
      }).catch(err => {
      });
    },
    addItem: function() {
      axios.post("http://localhost:3000/api/items", {
        text: this.text,
        author: this.author,
        readReview: 0,
      }).then(response => {
        this.text = "";
        this.author = "";
        readReview: 0;
	      this.getItems();
	      return true;
      }).catch(err => {
      });
    },
    addReadReview: function(item) {
      axios.put("http://localhost:3000/api/items/" + item.id, {
        text: item.text,
        author: item.author,
        readReview: item.readReview,
      }).then(response => {
        this.getItems();
	      return true;
      }).catch(err => {
      });
    },
    deleteReview: function(item) {
      axios.delete("http://localhost:3000/api/items/" + item.id).then(response => {
	      this.getItems();
	      return true;
      }).catch(err => {
      });
    },
  }
});
