<template>
  <div id="app">
    <top-header></top-header>
    <vue-page-transition name="fade">
      <router-view></router-view>
    </vue-page-transition>

    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    TopHeader: () => import('@/components/core/Header'),
    BottomFooter: () => import('@/components/core/Footer')
  }
}
</script>

<style lang="scss">
</style>
