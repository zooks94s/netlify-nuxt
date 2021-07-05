<template lang="pug">
  .global-menu
    transition(
      name="global-menu"
      @enter="onEnter"
      @leave="onLeave"
    )
      .global-menu__inner(v-if="isOpen")
        .global-menu__content
          .global-menu__item
            nuxt-link.global-menu__link(to="/") HOME
          .global-menu__item
            nuxt-link.global-menu__link(to="/about") ABOUT
          .global-menu__item
            nuxt-link.global-menu__link(to="/works") WORKS
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onEnter() {
      this.$emit('enter')
    },

    onLeave() {
      this.$emit('leave')
    },
  },
}
</script>

<style lang="scss" scoped>
.global-menu {
  &__inner {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 0;
    padding-bottom: 100vh;
    z-index: z-index(globalmenu);
    overflow: hidden;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
  }

  &__item {
    &:not(:first-child) {
      margin-left: $size-grid * 2;
    }
  }

  &__link {
    color: #ffffff;
    font-size: 5.8rem;
    text-decoration: none;
    font-family: $font-family-poppins;
    font-weight: 500;
  }

  &-enter-active,
  &-leave-active {
    transition: 0.5s ease;
  }

  &-enter,
  &-leave-to {
    padding-bottom: 0;
  }
}
</style>
