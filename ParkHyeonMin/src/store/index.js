import Vue from 'vue'
import Vuex from 'vuex'

import states from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"

Vue.use(Vuex)

//세션과 쿠키를 (이외에 더많은것들을 관리하기 위해서) 하는 것.
// 여기다 너무 많은걸 때려박아야하기때문에 분리해준것 << 스토어쪽에

//스레드 읽어보기 노션 시스템 관련 사항 <<<//
export default new Vuex.Store({
  states,
  actions,
  mutations,
  getters,
})
