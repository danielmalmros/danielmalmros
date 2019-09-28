<template>
  <div class="c-intro">
    <div class="c-intro__caption">
      <h1>Frontend Developer geeking JavaScript and microinteractions.</h1>
    </div>
    <a @click="scroll" href="#articles" class="scroll-indicator">
      <div class="dots"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  },
  computed: {},
  methods: {
    scroll() {
      this.$ga.event({
        eventCategory: "frontpage",
        eventAction: "scroll",
        eventValue: "scroll button pressed"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
