<template lang="pug">
  .global-menu-list
    .global-menu-list__item(
      v-for="(item, index) in items"
      :key="item.link"
    )
      .global-menu-list__item-inner(
        :class="[{ '-is-show': isShow }]"
        :style="delay(index)"
      )
        nuxt-link.global-menu-list__link(:to="item.link")
          .global-menu-list__text {{ item.text }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },

    isShow: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    delay(index) {
      return `transition-delay: ${index * 0.2}s`
    },
  },
}
</script>

<style lang="scss" scoped>
.global-menu-list {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    overflow: hidden;

    &:not(:first-child) {
      margin-left: $size-grid * 2;
    }

    &-inner {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 0.4s ease-out;

      &.-is-show {
        transform: translateY(0);
      }
    }
  }

  &__link {
    color: #ffffff;
    font-size: 5.8rem;
    text-decoration: none;
    font-family: $font-family-poppins;
    font-weight: 500;
  }
}
</style>
