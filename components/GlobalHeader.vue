<template lang="pug">
  header.global-header
    .global-header__inner
      h1.global-header__title
        nuxt-link.global-header__link(to="/")
          img.global-header__logo(src="~/assets/img/logo-94s.svg" alt="94s" width="240" height="72")

      nav.global-header__nav
        button.global-header__trigger(
          type="button"
          @click="toggleMenu"
        )
          transition(name="global-header-trigger" mode="out-in")
            span.global-header__trigger-text(v-if="!isShow" key="open") MENU
            span.global-header__trigger-text.-revert(v-else key="close") CLOSE
        GlobalMenu(:is-open="isOpen" @enter="enterMenu" @leave="leaveMenu")
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
      isShow: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },

    enterMenu() {
      this.isShow = true
    },

    leaveMenu() {
      this.isShow = false
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
    align-items: flex-start;
    justify-content: space-between;
  }

  &__logo {
    width: 100px;
  }

  &__trigger {
    position: relative;
    z-index: z-index(header);

    &-text {
      display: inline-block;
      font-family: $font-family-poppins;
      font-weight: 500;
      font-size: 1.8rem;

      &.-revert {
        color: #ffffff;
      }
    }
  }

  &-trigger {
    &-enter-active {
      transition: 0.5s ease-out;
    }

    &-leave-active {
      transition: 0.5s ease-in;
    }

    &-enter {
      opacity: 0;
      transform: translateY(100%);
    }

    &-leave-to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
}
</style>
