import BaseAxios from '../utils/httpClient/index'
class UserManager extends BaseAxios {
  login (data) {
    return this.post('login', data)
  }
  getUserList (data) {
    return this.post('users', data)
  }
  add (data) {
    return this.post('user/add', data)
  }
}

export default UserManager
