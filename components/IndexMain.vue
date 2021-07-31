<template lang="pug">
  .index-main
    .index-main__inner
      h1.index-main__title
        span.index-main__title-inline zooks94s portfolio
      p.index-main__description Hello.
      p.index-main__description I'm a front-end developer.
</template>

<style lang="scss" scoped>
.index-main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 5.2rem;
    font-weight: 500;
  }
}
</style>
