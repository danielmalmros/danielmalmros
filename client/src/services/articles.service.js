import Api from '@/services/api'

export default {
  getArticles() {
    return Api().get('/articles')
  },

  getArticle(id) {
    return Api().get('/articles?id=' + id)
  }
}
