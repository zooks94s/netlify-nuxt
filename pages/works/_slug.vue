<template lang="pug">
  .slug
</template>

<script>
export default {
  asyncData({ payload }) {
    if (payload) {
      return {
        currentPost: payload,
      }
    }
  },
}
</script>
