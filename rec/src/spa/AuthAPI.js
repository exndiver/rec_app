import Api from '@/spa/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
