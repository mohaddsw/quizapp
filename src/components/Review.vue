<template>
  <div>
    <div class="review" v-if="show_review">
    <section>
      <header>
        <span>Quiz App Review</span>
      </header>
      <article>
        <p>1. Lorem ipsum dolor sit amet consec.</p>
        <p>2. Lorem ipsum dolor sit amet consec.</p>
        <p>3. Lorem ipsum dolor sit amet consec.</p>
        <p>4. Lorem ipsum dolor sit amet consec.</p>
      </article>
      <footer>
        <div class="buttons">
          <button @click="exite" class="exite">Exit</button>
          <button @click="continue_Questions" class="continue">continue</button>
        </div>
      </footer>
    </section>
  </div>
  <questions></questions>
  </div>
</template>
<script>
import questions from "./Questions.vue";
export default {
  components: {
    questions,
  },
  data() {
    return {
      show_review: false,
      show_questions_box:false
    };
  },
  computed: {
    showReview(){
      return this.$store.getters['get_show_review']()
    }
  },
  methods: {
    exite: function() {
      this.show_review = false;
      this.$store.dispatch('set_show_review',this.show_review)
    },
    continue_Questions: function() {
      this.show_review = false;
       this.$store.dispatch('set_show_review',this.show_review)
       this.show_questions_box=true;
       this.$store.dispatch('set_show_questions_box',this.show_questions_box)
      
    },
   
  },
  
  watch: {
   
    showReview:function(val){
       this.show_review = val;
    }
  },
};
</script>
<style scoped>
.review {
  /*display: none;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  z-index: 20;
  background-color: #262626;
  box-shadow: 5px 0px 20px 0px #080808d5, 0px 0px 20px 0px #080808;
  border-radius: 5px;
  color: lightgrey;
  transition: all 0.5s ease-in-out;
}

.review section header {
  padding: 20px;
  border-bottom: 1px solid #3b3b3b;
}
.review section header span {
  font-size: 20pt;
  font-weight: 600;
}

.review article {
  padding: 10px 40px;
}
.review article p {
  line-height: 30px;
}

.review footer {
  padding: 15px 10px;
  border-top: 1px solid #3b3b3b;
}
.review footer .buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;

}
.review footer .buttons .exite,
.review footer .buttons .continue {
  padding: 10px 25px;
  border: 1px solid transparent;
  margin-left: 5px;
  border-radius: 5px;
  background-color: #3b3b3b;
  cursor: pointer;
  color: #fff;
  transition: all 0.5s ease-in-out;
   outline: none;
}
.review footer .buttons .continue {
  background-color: #fec518;
}
.review footer .buttons .continue:hover {
  background-color: #ff8d00;
}

.review footer .buttons .exite:hover {
  background-color: #1a1a1a;
}
</style>
