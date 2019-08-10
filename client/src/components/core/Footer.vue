<template>
  <footer class="c-footer">
    <div class="container">
      <div class="c-footer__inner">
        <span>All materials © Daniel Malmros 2019</span>
        <div class="c-footer__social">
          <a class="c-link" href="https://twitter.com/dmalmros" target="_blank">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a class="c-link" href="https://www.instagram.com/by_malmros/" target="_blank">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a class="c-link" href="https://github.com/danielmalmros" target="_blank">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
.c-footer {
  width: 100%;
  margin-bottom: 40px;
}

.c-footer__inner {
  display: flex;
  justify-content: space-between;
}

.c-footer__social {
  display: flex;

  .c-link {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
