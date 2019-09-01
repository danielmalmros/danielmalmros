<template>
  <div>
    <intro></intro>
    <div class="container u-margin-top-reset">
      <articles-preview v-if="articles.length" :articles="articles"></articles-preview>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Intro: () => import('@/components/home/Intro'),
    ArticlesPreview: () => import('@/components/home/ArticlesPreview')
  },
  mounted() {
    this.$store.dispatch('loadArticles')
  },
  computed: mapState({
    articles: state => state.articles
  })
}
</script>
