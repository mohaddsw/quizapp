<template>
  <div>
    <div class="score" v-show="show_score">
    <section>
      <header>
        <span>You're Score!</span>
      </header>
      <article>
        <p> You're Score is {{score}} of {{qustionLength}}.</p>
       </article>
      <footer>
        <div class="buttons">
          <button @click="replay" class="replay">Replay</button>
          <button  @click="end" class="end">End</button>
        </div>
      </footer>
    </section>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show_score:false,
      show_qouestions_box:false
    }
  },
  props:["score","qustionLength"],
  methods:{
    replay:function(){
       this.show_score=false;
       this.$store.dispatch('set_show_score_box',this.show_score)
       this.show_qouestions_box=true;
       this.$store.dispatch('set_show_questions_box',this.show_qouestions_box)

    },
    end:function(){
      this.show_score=false;
      this.$store.dispatch('set_show_score_box',this.show_score);
      
    }
  },
  
   computed: {
    showScore(){
      return this.$store.getters['get_shoew_score_box']()
    }
  },
  watch:{
    showScore:function(newVal){
    
      this.show_score=newVal
    }
  },
 
 
};
</script>
<style scoped>
.score {
  /* display: none; */
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

.score section header {
  padding: 20px;
  border-bottom: 1px solid #3b3b3b;
}
.score section header span {
  font-size: 20pt;
  font-weight: 600;
}

.score article {
  padding: 10px 40px;
}
.score article p {
  line-height: 30px;
}

.score footer {
  padding: 15px 10px;
  border-top: 1px solid #3b3b3b;
}
.score footer .buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
.score footer .buttons .end,
.score footer .buttons .replay {
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
.score footer .buttons .replay {
  background-color: #fec518;
}
.score footer .buttons .replay:hover {
  background-color: #ff8d00;
}

.score footer .buttons .end:hover {
  background-color: #1a1a1a;
}
</style>
