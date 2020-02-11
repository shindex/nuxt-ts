import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  age: 0 as number
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  age: state => state.age,
})

export const mutations = mutationTree(state, {
  setAge(state, age: number): void {
    state.age = age
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  getOlder({ commit }) {
    const currentAge = this.app.$accessor.age.age;
    commit('setAge', currentAge + 1)
  },
  hoge(): string {
    return 'i am hoge'
  },
  fuga() {
    const res = this.app.$accessor.age.hoge()
    console.log(res)
  }
})