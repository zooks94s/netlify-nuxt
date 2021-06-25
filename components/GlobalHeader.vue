<template lang="pug">
  header.global-header
    h1.global-header__title
      nuxt-link(to="/")
        img(src="~/assets/img/logo-94s.svg" alt="94s" width="240")
</template>

<style lang="scss" scoped>
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 48px;
}
</style>
