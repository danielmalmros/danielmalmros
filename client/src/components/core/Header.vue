<template>
  <nav class="c-header">
    <div class="c-header__inner">
      <router-link class="c-link" to="/">@danielmalmros</router-link>
      <ul class="c-header__nav c-reset-list">
        <li class="c-header__nav-item">
          <router-link class="c-link" to="/about">About</router-link>
        </li>
        <li class="c-header__nav-item">
          <router-link class="c-link" to="/projects">Projects</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
