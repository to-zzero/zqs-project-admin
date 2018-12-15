import { loginAPI, logoutAPI, getUserInfoAPI } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { setStorage, getStorage } from '@/utils'
import { Message } from 'element-ui'

const userInfoStorage = getStorage('userInfo') || {}
const userInfoList = [
  'id',
  'name',
  'country',
  'phone'
]

const getUserObj = (list, data) => {
  const result = {}
  list.forEach(val => {
    result[val] = data[val] || ''
  })
  return result
}

const token = getToken()
const user = {
  state: {
    token,
    userInfo: getUserObj(userInfoList, userInfoStorage),
    isLogin: !!token
  },

  mutations: {
    SET_STATE: (state, data) => {
      state[data.key] = state[data.val]
    },
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
    },
    SET_USERINFO(state, data = {}) {
      state.userInfo = Object.assign(state.userInfo, data)
    }
  },

  actions: {
    // 登录
    Login({ commit, dispatch }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginAPI(username, userInfo.pwd).then(res => {
          commit('SET_TOKEN', res.token)
          commit('SET_STATE', {
            key: 'isLogin',
            val: true
          })
          dispatch('getUserInfo')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfoAPI().then(response => {
          const result = getUserObj(userInfoList, response)
          commit('SET_USERINFO', result)
          // commit('SET_TOKEN', response.token)
          setStorage('userInfo', result)
          resolve(result)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logoutAPI().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_STATE', {
            key: 'isLogin',
            val: true
          })
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        setStorage('userInfo', {})
        resolve()
      })
    },

    initUser({ commit, state, dispatch }) {
      if (state.isLogin && !state.userInfo.name) {
        dispatch('FedLogOut').then(() => {
          Message({
            message: '非法操作，请重新登录',
            type: 'error',
            duration: 3 * 1000,
            onClose: () => {
              location.reload()
            }
          })
        })
      } else if (state.isLogin) {
        dispatch('getUserInfo')
      }
    }
  }
}

export default user
