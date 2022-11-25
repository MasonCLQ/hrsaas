import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
const state = {
  token: getToken() // 设置token的共享状态，初始化vuex时候，就先从缓存中读取
}

const mutations = {
  // 修改token的值，并调用函数，将token值存入缓存
  patchToken(state, payload) {
    state.token = payload
    setToken(state.token)
  },
  // 设置token为null，并删除缓存token
  delToken(state) {
    state.token = null
    removeToken()
  }
}

const actions = {
  // 因为发起请求时异步操作，所以必须通过action
  async login(ctx, payload) {
    // 调用api接口,发起login请求
    const res = await login(payload)
    ctx.commit('patchToken', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
