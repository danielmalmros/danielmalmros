import Api from '@/services/api'

export default {
  getAbout() {
    return Api().get('/abouts')
  }
}
