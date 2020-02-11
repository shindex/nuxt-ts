import { getAccessorType, getterTree, mutationTree, actionTree, useAccessor } from 'typed-vuex'

// 例えば、store/age.ts のようなサブモジュールが存在する場合、
// ここで import しておきます。
import * as age from '~/store/age'

// state, getters, mutations, actions はここに記述します。
// ただ、今まで通りに記述するとうまくいきません。
// 記述法は後ほど解説します。

export const state = () => ({

})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {

})

export const mutations = mutationTree(state, {

})

export const actions = actionTree({ state, getters, mutations }, {

})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // import したサブモジュールはここに記述します。
    age,
  },
})