<template lang="pug">
  .works-item
    nuxt-link(:to="{ name: 'works-slug', params: { slug: slug } }")
      .works-item__title {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    slug: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.works-item {
  &__title {
    font-size: 2rem;
  }
}
</style>
