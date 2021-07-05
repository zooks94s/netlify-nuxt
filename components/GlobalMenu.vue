<template lang="pug">
  .global-menu
    transition(
      name="global-menu"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @before-leave="onBeforeLeave"
    )
      .global-menu__inner(v-if="isOpen")
        .global-menu__content
          GlobalMenuList(:items="items" :is-show="isShowItems")
</template>

<script>
import GlobalMenuList from '@/components/GlobalMenuList'

export default {
  components: {
    GlobalMenuList,
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      items: [
        {
          text: 'HOME',
          link: '/',
        },
        {
          text: 'ABOUT',
          link: '/about',
        },
        {
          text: 'WORKS',
          link: '/works',
        },
      ],
      isShowItems: false,
    }
  },

  methods: {
    onEnter() {
      this.$emit('enter')
    },

    onAfterEnter() {
      this.isShowItems = true
    },

    onLeave() {
      this.$emit('leave')
    },

    onBeforeLeave() {
      this.isShowItems = false
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
    background-color: rgba(0, 0, 0, 0.8);
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
