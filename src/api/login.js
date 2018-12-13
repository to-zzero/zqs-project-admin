import request from '@/utils/request'

export function loginAPI(username, pwd) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      pwd
    }
  })
}

export function addUserAPI({ username, pwd }) {
  return request({
    url: '/user/addUser',
    method: 'post',
    data: {
      username,
      pwd
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
