<template>
  <div class="container">
    <article v-if="about">
      <header class="c-article__header">
        <h1 class="u-margin-bottom-m">{{ about.title }}</h1>
        <div>
          <transition>
            <img class="u-image" v-show="isLoad" :src="about.image.url" @load="loaded" />
          </transition>
          <div class="c-skeleton-img" v-show="!isLoad"></div>
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
      env: process.env.VUE_APP_ENV_API,
      isLoad: false
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
  }),
  methods: {
    loaded() {
      this.isLoad = true
    }
  }
}
</script>
