import request from '@/utils/request'

export function login(data) {
  console.log(request.post('/sys/login', data))
  return request.post('/sys/login', data)
}

export function getInfo(token) {

}

export function logout() {

}
