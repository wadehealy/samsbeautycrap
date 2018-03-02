Vue.component('modal', {
  props:[
    'service',
    'price',
    'description',
    'image'
  ],
  template:`
  <div class="modal-mask" @click="$emit('close')">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            {{ service }} - {{ price }}
          </slot>
          <button class="modal-default-button" @click="$emit('close')">
            <img class="close" src="/cancel.svg"/>
          </button>
        </div>

        <div class="modal-body">
          <slot name="body">
            <img :src="image"/>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
          {{ description }}
          </slot>
        </div>
      </div>
    </div>
  </div>`,
})

var app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedComment: '',
    commentDateTime: '',
    comments: {},
    showModal: false,
    modalInfo: {},
    services:[
      {
        service:"Men's Cut",
        price:"$15",
        description:"This is just a normal Men's Cut",
        image:"/gallery_1.jpg"
      },
      {
        service:"Women's Cut",
        price:"$20",
        description:"This is just a normal Women's Cut",
        image:"/gallery_2.jpg"
      },
      {
        service:"Balayage",
        price:"$90+",
        description:"Not super sure exactly what this is...",
        image:"/gallery_3.jpg"
      },
      {
        service:"Weave",
        price:"$80+",
        description:"Maybe some type of weave thing goign on here?",
        image:"/gallery_4.jpg",
      },
      {
        service:"All Over Color",
        price:"$50+",
        description:"Typically Coloring up the yin yang",
        image:"/gallery_5.jpg",
      },
      {
        service:"Scalp Treatment",
        price:"$15",
        description:"Head Massage",
        image:"/gallery_6.jpg",
      },
      {
        service:"Wax",
        price:"$15+",
        description:"If you don't want hair on a part of your body",
        image:"/gallery_7.jpg",
      },
      {
        service:"Full Set of Lashes",
        price:"$60+",
        description:"If you hate your eye lashes and want new ones",
        image:"/gallery_8.jpg",
      },
      {
        service:"2 Week Fill",
        price:"$30",
        description:"First follow up for the full set of lashes so I can get more money from you",
        image:"/gallery_9.jpg",
      },
      {
        service:"3 Week Fill",
        price:"$45",
        description:"Final follow up on the full set of lashes for once again more money",
        image:"/gallery_1.jpg",
      },
      {
        service:"Microblading",
        price:"$350",
        description:"Eyelash tatoos",
        image:"/gallery_2.jpg",
      }
    ]
  },
  methods: {
    addComment: function() {
      if (!(0 in this.comments))
	      Vue.set(app.comments, 0, new Array);
      this.comments[0].push({author:this.addedName, text:this.addedComment, dateTime: Date()});
      console.log(this.comments);
      this.addedName = '';
      this.addedComment = '';
    },
    displayPriceOptions: function(){
      console.log("show price options");
      for(var i=0; i<this.services.length; i++){
        document.getElementById("prices").innerHTML += "<div class=\"prices\" id=\"show-modal\" v-on:click=\"toggleModal(" + i + ")\">"+ this.services[i].service + " - " + this.services[i].price +"</div>";      
      }
    },
    toggleModal: function(index){
      
      this.modalInfo = this.services[index];
      console.log("Pressed the Button to change the modal");
      this.showModal= !this.showModal;
      
    },
  },
  created(){
    this.displayPriceOptions();
    // this.toggleModal;
  },
});
