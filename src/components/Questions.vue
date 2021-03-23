<template>
  <div>
    <div
      class="quizQuestions"
      v-show="show_questions_box"
      v-for="question in questions.slice(a, b)"
      :key="question.number"
    >
      <section>
        <header>
          <span class="questions">
            Question {{ question.number }} : {{ question.question }}</span
          >
          <!-- <div class="timer">
            <span>15</span>
            <span>|</span>
            <span>5s</span>
          </div> -->
        </header>
        <article>
          <div
            v-for="(option, index) in question.options"
            :key="index"
            class="options"
            @click="answer_question(option, index)"
            ref="correctItem"
          >
            <p>{{ ++index }} : {{ option.option }}.</p>
          </div>
        </article>
        <footer>
          <div class="quiz-num">
            <span>{{ question.number }}</span>
            <span>of</span>
            <span>{{ questions.length }}</span>
          </div>
          <div class="next_question_buttons">
            <button
              :class="disableButton ? 'disableButton' : 'enableButton'"
              @click="nextQuestionButton"
            >
              Next
            </button>
          </div>
        </footer>
      </section>
    </div>
    <score :score="scoreNum" :qustionLength="questions.length"></score>
  </div>
</template>

<script>
import score from "./Score.vue";
export default {
  components: {
    score,
  },
  data() {
    return {
      show_questions_box: null,
      questions: [
        {
          number: 1,
          question: "Where is Billie Eilish from?",
          options: [
            { option: "Iran" },
            { option: "London " },
            { option: "Los Angeles", correct: true },
            { option: "England" },
          ],
        },
        {
          number: 2,
          question: "How many days does it take for the Earth to orbit the Sun?",
          options: [
            { option: "360" },
            { option: "364" },
            { option: "366" },
            { option: "365", correct: true },
          ],
        },
        {
          number: 3,
          question: "How many keys does a classic piano have?",
          options: [
            { option: "88", correct: true },
            { option: "80" },
            { option: "87" },
            { option: "89" },
          ],
        },
        {
          number: 4,
          question: "When was Netflix founded: 1997, 2001, 2009, 2015?",
          options: [
            { option: "1995" },
            { option: "1997", correct: true },
            { option: "1990" },
            { option: "1996" },
          ],
        },
       
      ],
      a: 0,
      b: 1,
      correctItem: null,
      allowSelect: true,
      disableButton: true,
      questionNumber: 0,
      show_score: false,
      scoreNum: 0,
    };
  },
  watch: {
    showScore: function(newVal) {
      if (!newVal) {
        Object.assign(this.$data, this.$options.data());
      }
    },
    showQuestionsBox: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.show_questions_box = newVal;
      }
    },
  },

  methods: {
    /*
     click to option for answer function
     */
    answer_question(option, index) {
      //user can select just on option
      if (this.allowSelect) {
        //enable button when selected option
        this.disableButton = false;

        //div selected DOM
        let divSelect = this.$refs.correctItem[index - 1];

        if (option.correct) {
          //add 'answer_correct' class to correct option
          divSelect.classList.add("answer_correct");

          //add score
          ++this.scoreNum;
        } else {
          //add 'answer_flase' class to false option
          divSelect.classList.add("answer_flase");
        }
      }

      //user can not select tow options.
      this.allowSelect = false;
    },

    /*
    next question buttom function
    */
    nextQuestionButton() {
   

      //disable next botton when dos not selected Option
      if (!this.disableButton) {
        if (this.questionNumber < this.questions.length - 1) {
          //in next question user can select option
          this.allowSelect = true;

          //desible button when dos not selected option yet
          this.disableButton = true;

          if (this.questions.length - 1 !== this.a) {
            this.a++;
            this.b++;
          }

          ++this.questionNumber;
        } else if (this.questionNumber === this.questions.length - 1) {
          this.show_score = true;
          this.$store.dispatch("set_show_score_box", this.show_score);
          this.show_questions_box = false;
          this.$store.dispatch(
            "set_show_questions_box",
            this.show_questions_box
          );
        }
      }
    },
  },
  computed: {
    showQuestionsBox() {
      return this.$store.getters["get_shoew_questions_box"]();
    },
    showScore() {
      return this.$store.getters["get_shoew_score_box"]();
    },
  },
};
</script>

<style>
.quizQuestions {
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

.quizQuestions section header {
  padding: 20px;
  border-bottom: 1px solid #3b3b3b;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.quizQuestions section header span.questions {
  font-size: 17pt;
  font-weight: 600;
  line-height: 35px;
  padding-right: 15px;
}
.quizQuestions section header .timer {
  background-color: #9f9f9f;
  padding: 6px 2px;
  border-radius: 5px;
  font-weight: 600;
  user-select: none;
  font-size: 10pt;
}
.quizQuestions section header .timer span:nth-child(1),
.quizQuestions section header .timer span:nth-child(2),
.quizQuestions section header .timer span:nth-child(3) {
  color: #262626;
  margin: 0 1px;
}

.quizQuestions section header .timer span:first-child {
  background-color: #262626;
  padding: 2px 4px;
  border-radius: 5px;
  color: lightgray;
}
.quizQuestions section article {
  padding: 10px;
}
.quizQuestions section article .options:last-child {
  margin-bottom: 0;
}
.quizQuestions section article .answer_flase {
  border-color: #fc0901 !important;
  color: #fc0901 !important;
  background: #fc09010a !important;
}
.quizQuestions section article .answer_correct {
  border-color: #46fe18 !important;
  color: #46fe18 !important;
  background: #46fe181c !important;
}
.quizQuestions section article .options {
  line-height: 30px;
  border: 1px solid #9f9f9f;
  margin-bottom: 10px;
  border-radius: 50px;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
}
.quizQuestions section article .options:hover {
  border-color: #fec518;
  color: #fec518;
  background: #fec41813;
}
.quizQuestions section article .options p {
}
.quizQuestions section footer {
  padding: 15px 10px;
  border-top: 1px solid #3b3b3b;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.quizQuestions section footer .quiz-num span {
  margin: 0 3px;
}
.quizQuestions section footer .next_question_buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
.quizQuestions section footer .next_question_buttons button.disableButton {
  cursor: no-drop;
  background-color: #3b3b3b;
}
.quizQuestions section footer .next_question_buttons button.enableButton {
  cursor: pointer;
}
.quizQuestions section footer .next_question_buttons button {
  padding: 10px 25px;
  border: 1px solid transparent;
  margin-left: 5px;
  border-radius: 5px;
  background-color: #fec518;
  cursor: pointer;
  color: #fff;
  transition: all 0.5s ease-in-out;
  outline: none;
}
.quizQuestions section footer .next_question_buttons.enableButton button:hover {
  background-color: #ff8d00;
}
</style>
