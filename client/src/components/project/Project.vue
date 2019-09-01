<template v-if="project">
  <div>
    <div class="container">
      <article>
        <div>
          <header class="c-article__header">
            <h1 class="u-margin-bottom-m">{{ project.name }}</h1>
            <div v-if="project.image">
              <img class="u-image" :src="project.image.url" alt />
            </div>
          </header>
          <vue-markdown :source="project.description"></vue-markdown>
        </div>
      </article>
    </div>
    <div v-if="project.images" class="container-wide">
      <carousel-3d
        :border="0"
        :width="400"
        :controls-visible="true"
        :controls-prev-html="'&#10092;'"
        :controls-next-html="'&#10093;'"
      >
        <slide v-for="(image, index) in project.images" :key="index" :index="index">
          <img class="u-image" :src="image.url" alt />
        </slide>
      </carousel-3d>
    </div>

    <div class="container">
      <div class="c-project__general u-margin-bottom-m">
        <div class="c-project__general-item">
          <h3 class="u-margin-bottom-m">Facts</h3>
          <ul class="c-reset-list">
            <li>
              <strong>Company:</strong>
              {{ project.company }}
            </li>
            <li>
              <strong>Role:</strong>
              {{ project.role }}
            </li>
            <li>
              <strong>Tech stack:</strong>
              {{ project.tech }}
            </li>
          </ul>
        </div>
        <div class="c-project__general-item">
          <h3 class="u-margin-bottom-m">Want to know more?</h3>
          <p>Are you interested in hearing more about the solution or do you have a project you want help with? Please contact me.</p>
        </div>
      </div>

      <div v-if="project.video_id">
        <h3 class="u-margin-bottom-m">Promotion video</h3>
        <vue-plyr>
          <div data-plyr-provider="vimeo" :data-plyr-embed-id="project.video_id" loading="lazy"></div>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { mapState } from 'vuex'

export default {
  name: 'Project',
  components: {
    Carousel3d,
    Slide,
    VueMarkdown
  },
  props: ['id'],
  data() {
    return {
      env: process.env.VUE_APP_ENV_API
    }
  },
  mounted() {
    this.$store.dispatch('loadProject', this.id)
  },
  computed: mapState({
    project: state => state.project
  }),
  methods: {}
}
</script>

<style lang="scss">
.device-wrapper {
  max-width: initial;
}
.carousel-3d-slide img {
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.carousel-3d-controls {
  .next,
  .prev {
    color: $color-white;
    transition: color 0.3s ease;

    &:hover {
      color: $color-primary-green;
    }
  }
}

.c-project__general {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: $medium-breakpoint) {
    flex-direction: row;
  }
}

.c-project__general-item {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin: 0;
  }

  @media (min-width: $medium-breakpoint) {
    width: 40%;
  }
}
</style>
