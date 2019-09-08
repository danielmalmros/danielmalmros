<template>
  <div id="app">
    <top-header></top-header>
    <vue-page-transition name="fade">
      <router-view :key="$route.path"></router-view>
    </vue-page-transition>
    <bottom-footer></bottom-footer>
    <loading-screen v-if="loading"></loading-screen>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    TopHeader: () => import('@/components/core/Header'),
    BottomFooter: () => import('@/components/core/Footer'),
    LoadingScreen: () => import('@/components/loading/LoadingScreen')
  },
  computed: mapState(['loading'])
}
</script>

<style lang="scss">
</style>
