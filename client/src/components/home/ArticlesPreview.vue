<template>
  <div class="c-articles" id="articles">
    <article
      class="c-article"
      v-for="(article, index) in articlesData.slice().reverse()"
      :key="index"
    >
      <span class="c-article__tag">{{article.tag}}</span>

      <div>
        <header class="c-article__header">
          <router-link class="c-link" :to="{ name: 'article', params: { id: article.id }}">
            <h3>{{article.title}}</h3>
          </router-link>

          <small class="c-article__meta">
            <span>{{article.author.username}}</span>
            <span>
              {{ formatTimeStamp(article.created_at) }} ·
              <reading-time :content="article.content"></reading-time>
            </span>
          </small>
        </header>
        <p>{{article.intro}}</p>
      </div>
      <router-link
        class="c-article__read-btn c-link"
        :to="{ name: 'article', params: { id: article.id }}"
      >
        Read
        <i class="fas fa-long-arrow-alt-right"></i>
      </router-link>
    </article>
  </div>
</template>

<script>
import { dateFormatter } from '@/mixins/date-formatter.mixins'

export default {
  name: 'ArticlesPreview',
  mixins: [dateFormatter],
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  components: {
    ReadingTime: () => import('@/components/reading-time/ReadingTime')
  },
  data() {
    return {
      articlesData: this.articles
    }
  },
  computed: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
