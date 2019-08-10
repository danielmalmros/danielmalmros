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
.c-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
}

.c-header__inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px 6vw 0;
}

.c-header__nav {
  display: flex;
}

.c-header__nav-item {
  margin-right: 15px;

  &:last-child {
    margin: 0;
  }
}
</style>
