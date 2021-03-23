<template>
  <!-- start quiz app button -->
  <div class="quiz-app">
    <button @click="start_quiz" class="startQuiz">Start Quiz</button>
    <review
      @show-review-emit="change_review($event)"
      class="revew"
    ></review>
  </div>
</template>

<script>
import review from "./Review.vue";

export default {
  components: {
    review,
  },
  data() {
    return {
      // defined show_review data
      show_review: false,
    };
  },
  computed:{
    showReview(){
      return this.$store.getters['get_show_review']()
    }
  },

  methods: {
    // start quiz function for 'start quiz' button
    /* send 'show_review' props to review component and open Review box*/
    start_quiz: function() {
      this.$store.dispatch('set_show_review',true)
      
      if (this.show_review === false) {
        this.show_review = true;
      }
      
    },

    change_review: function(event) {
      this.show_review = event;
    },
  },
  watch: {
    showReview:function(val){
      console.log(val,"showReview")
      this.show_review=val
    }
  },
};
</script>

<style scoped>
.quiz-app {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
}

.quiz-app button.startQuiz {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 25px;
  font-size: 15pt;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #fec518;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 10;
  outline: none;
}
.quiz-app button.startQuiz:hover {
  background-color: #ff8d00;
}
</style>
