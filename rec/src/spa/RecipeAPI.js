import Api from '@/spa/Api'

export default{
  getrecipebyid (credentials) {
    return Api().post('GetRecById', credentials)
  },
  addrecipe (credentials) {
    return Api().post('AddRecipe', credentials)
  },
  removerecipebyid (credentials) {
    return Api().post('DelRecipeById', credentials)
  }
}
