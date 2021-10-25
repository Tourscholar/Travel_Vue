import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutations";

// export default new Vuex.Store({
//   state,
//   mutations,
//   getters: {
//     doubleCity (state) {
//       return state.city
//     }
//   }
// })

export default createStore({
  state,
  mutations,
  getters: {
    doubleCity(state) {
      return state.city;
    },
  },
});
