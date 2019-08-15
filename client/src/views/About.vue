<template>
  <div class="container">
    <article v-if="about">
      <header class="c-article__header">
        <h1 class="u-margin-bottom-m">{{ about.title }}</h1>
        <div>
          <img class="u-image" :src="env + about.image.url" alt />
        </div>
      </header>
      <vue-markdown :source="about.description"></vue-markdown>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'About',
  data() {
    return {
      env: process.env.VUE_APP_ENV_API
    }
  },
  components: {
    VueMarkdown
  },
  mounted() {
    this.$store.dispatch('loadAbout')
  },
  computed: mapState({
    about: state => state.about[0]
  })
}
</script>
