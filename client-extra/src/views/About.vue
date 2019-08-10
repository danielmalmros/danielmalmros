<template>
  <div id="home">
    <about />
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    About: () => import('@/components/about/About')
  }
}
</script>
