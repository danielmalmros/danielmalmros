<template>
  <div class="container">
    <article-layout v-if="article" :article="article"></article-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  props: ['id'],
  data() {
    return {}
  },
  components: {
    ArticleLayout: () => import('@/components/article/ArticleLayout')
  },
  mounted() {
    this.$store.dispatch('loadArticle', this.id)
  },
  computed: mapState({
    article: state => state.article
  })
}
</script>
