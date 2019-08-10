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
    }
  },
  actions: {
    loadAbout({ commit }) {
      about
        .getAbout()
        .then(r => r.data)
        .then(about => {
          commit('SET_ABOUT', about)
        })
    },

    loadArticles({ commit }) {
      articles
        .getArticles()
        .then(r => r.data)
        .then(articles => {
          commit('SET_ARTICLES', articles)
        })
    },

    loadArticle({ commit }, id) {
      articles
        .getArticle(id)
        .then(r => r.data)
        .then(article => {
          article = article[0]
          commit('SET_ARTICLE', article)
        })
    },

    loadProjects({ commit }) {
      projects
        .getProjects()
        .then(r => r.data)
        .then(projects => {
          commit('SET_PROJECTS', projects)
        })
    },

    loadProject({ commit }, id) {
      projects
        .getProject(id)
        .then(r => r.data)
        .then(project => {
          project = project[0]
          commit('SET_PROJECT', project)
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
    }
  }
})
