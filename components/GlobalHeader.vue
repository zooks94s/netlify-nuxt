<template lang="pug">
  header.global-header
    .global-header__inner
      h1.global-header__title
        nuxt-link.global-header__link(to="/")
          img.global-header__logo(src="~/assets/img/logo-94s.svg" alt="94s" width="240" height="72")

      nav.global-header__nav
        button.global-header__trigger(type="button" @click="toggleGlobalMenu") menu
        GlobalMenu(:is-open="isOpen")
</template>

<script>
import GlobalMenu from '@/components/GlobalMenu.vue'

export default {
  components: {
    GlobalMenu,
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggleGlobalMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 48px;

  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 100px;
  }

  &__trigger {
    position: relative;
    z-index: z-index(header);
  }
}
</style>
