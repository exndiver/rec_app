import Api from '@/spa/Api'

export default{
  getalltags () {
    return Api().get('GetAllTags')
  }
}
