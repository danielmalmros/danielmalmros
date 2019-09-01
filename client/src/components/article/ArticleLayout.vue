<template>
  <div>
    <article>
      <span class="c-article__tag">{{article.tag}}</span>
      <div>
        <header class="c-article__header">
          <h1>{{article.title}}</h1>

          <small class="c-article__meta" v-if="article.author">
            <span>{{article.author.username}}</span>
            <span>
              {{ formatTimeStamp(article.created_at) }} ·
              <reading-time :content="article.content"></reading-time>
            </span>
          </small>
        </header>
        <vue-markdown :source="article.content"></vue-markdown>
      </div>
    </article>
  </div>
</template>

<script>
import Prism from 'prismjs'

import VueMarkdown from 'vue-markdown'
import { dateFormatter } from '@/mixins/date-formatter.mixins'

export default {
  name: 'ArticleLayout',
  mixins: [dateFormatter],
  components: {
    VueMarkdown,
    ReadingTime: () => import('@/components/reading-time/ReadingTime')
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  updated() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss">
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background-color: $color-primary-light;
  padding: 20px;
  margin-top: 0;
  margin-right: -20px;
  margin-left: -20px;
  margin-bottom: 1.55rem;
  border-radius: 0;
}
</style>
