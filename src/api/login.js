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

export function deleteUserAPI(id) {
  return request({
    url: '/user/delete_user',
    method: 'post',
    data: {
      id
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

export function logoutAPI() {
  return request({
    url: '/user/login_out',
    method: 'post'
  })
}

export function getUserInfoAPI(username) {
  return request({
    url: '/user/get_user_info',
    method: 'post',
    data: {
      username
    }
  })
}
