import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import * as actions from './actions.js'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
