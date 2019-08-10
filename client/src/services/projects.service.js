import Api from '@/services/api'

export default {
  getProjects() {
    return Api().get('/projects')
  },

  getProject(id) {
    return Api().get('/projects?id=' + id)
  }
}
