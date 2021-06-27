<template lang="pug">
  .global-menu(v-if="isOpen")
    .global-menu__inner
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
}
</script>

<style lang="scss" scoped>
.global-menu {
  &__inner {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: z-index(globalmenu);
  }

  &__content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
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

  &__close {
    position: absolute;
    top: $size-grid * 2;
    right: $size-grid * 3;
    width: 40px;
    height: 40px;
    color: #ffffff;
  }
}
</style>
