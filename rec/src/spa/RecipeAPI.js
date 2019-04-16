import Api from '@/spa/Api'

export default{
  getrecipebyid (id) {
    return Api().post('GetRecById', id)
  },
  addrecipe (recipe) {
    return Api().post('AddRecipe', recipe)
  },
  removerecipebyid (id) {
    return Api().post('DelRecipeById', id)
  },
  getallproducts () {
    return Api().get('GetAllProducts')
  },
  searchproducts (name) {
    return Api().get('SearchProducts/' + name)
  }
}
