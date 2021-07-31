<template lang="pug">
  .works-list
    .works-list__item(v-for="item in items" :key="item.title")
      WorksItem(
        :title="item.fields.title"
        :slug="item.fields.slug"
      )
</template>

<script>
import WorksItem from '@/components/WorksItem.vue'

export default {
  components: {
    WorksItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.works-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-gap: 32px;
  margin: 0 32px;
}
</style>
