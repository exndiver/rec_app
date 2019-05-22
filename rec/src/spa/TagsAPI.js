import Api from '@/spa/Api'

export default{
  getalltags () {
    return Api().get('GetAllTags')
  },
  addtag (tag) {
    return Api().post('AddTag', tag)
  }
}
