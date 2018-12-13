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

export function queryUserListAPI({ page, size }) {
  return request({
    url: '/user/query_users',
    method: 'post',
    data: {
      page,
      size
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
