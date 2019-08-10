<template >
  <div class="container">
    <header class="c-article__header">
      <h1>Projects</h1>
    </header>

    <div class="c-grid" v-if="projects.length">
      <router-link
        class="c-grid__item c-grid__item--background c-link"
        v-for="(project, index) in projects"
        :key="index"
        :to="{ name: 'project', params: { id: project.id }}"
      >{{project.name}}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('loadProjects')
  },
  computed: mapState({
    projects: state => state.projects
  })
}
</script>

<style lang="scss">
</style>

