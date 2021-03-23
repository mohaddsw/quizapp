import vue from "vue";
import vuex from "vuex";
import { SHOW_REVIEW,SHOW_QUESTIONS_BOX,SHOW_SCORE_BOX } from "./auth";
vue.use(vuex);

export default new vuex.Store({
  state: {
    show_review: false,
    show_questions_box:false,
    show_score_box:false
  },
  getters: {
    get_show_review: (state) => () => state.show_review,
    get_shoew_questions_box:(state)=>()=>state.show_questions_box,
    get_shoew_score_box:(state)=>()=>state.show_score_box,
  },
  mutations: {
    [SHOW_REVIEW](state, key) {
      state.show_review = key;
    },
    [SHOW_QUESTIONS_BOX](state,value){
        state.show_questions_box=value
    },
    [SHOW_SCORE_BOX](state,value){
        state.show_score_box=value
    }
    
  },
  actions: {
    set_show_review({ commit }, key) {
      commit(SHOW_REVIEW, key);
    },
    set_show_questions_box({commit},value){
        commit(SHOW_QUESTIONS_BOX,value)
    },
    set_show_score_box({commit},value){
        commit(SHOW_SCORE_BOX,value)
    }
  },
});
