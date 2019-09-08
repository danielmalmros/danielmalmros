import Vue from 'vue'
import Vuex from 'vuex'
import about from '@/services/about.service'
import articles from '@/services/articles.service'
import projects from '@/services/projects.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    about: {
      type: Object
    },
    articles: {
      type: Array
    },
    article: {
      type: Object
    },
    projects: {
      type: Array
    },
    project: {
      type: Object
    },
    loading: false
  },
  actions: {
    loadAbout({ commit }) {
      commit('SET_LOADING', true),
        about
          .getAbout()
          .then(r => r.data)
          .then(about => {
            commit('SET_ABOUT', about), commit('SET_LOADING', false)
          })
    },

    loadArticles({ commit }) {
      commit('SET_LOADING', true),
        articles
          .getArticles()
          .then(r => r.data)
          .then(articles => {
            commit('SET_ARTICLES', articles), commit('SET_LOADING', false)
          })
    },

    loadArticle({ commit }, id) {
      commit('SET_LOADING', true),
        articles
          .getArticle(id)
          .then(r => r.data)
          .then(article => {
            article = article[0]
            commit('SET_ARTICLE', article), commit('SET_LOADING', false)
          })
    },

    loadProjects({ commit }) {
      commit('SET_LOADING', true),
        projects
          .getProjects()
          .then(r => r.data)
          .then(projects => {
            commit('SET_PROJECTS', projects), commit('SET_LOADING', false)
          })
    },

    loadProject({ commit }, id) {
      commit('SET_LOADING', true),
        commit('RESET_PROJECT'),
        projects
          .getProject(id)
          .then(r => r.data)
          .then(project => {
            project = project[0]
            commit('SET_PROJECT', project)
            commit('SET_LOADING', false)
          })
    }
  },
  mutations: {
    SET_ABOUT(state, about) {
      state.about = about
    },

    SET_ARTICLES(state, articles) {
      state.articles = articles
    },

    SET_ARTICLE(state, article) {
      state.article = article
    },

    SET_PROJECTS(state, projects) {
      state.projects = projects
    },

    SET_PROJECT(state, project) {
      state.project = project
    },

    RESET_PROJECT(state) {
      state.project = {}
    },

    SET_LOADING(state, loading) {
      state.loading = loading
    }
  }
})
