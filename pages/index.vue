<template lang="pug">
  main.page-index
    article.page-index__inner
      IndexMain

      section
        WorksList(:items="posts")
</template>

<script>
import IndexMain from '@/components/IndexMain'
import WorksList from '@/components/WorksList.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  components: {
    IndexMain,
    WorksList,
  },

  async asyncData({ env, params }) {
    return await client
      .getEntries(env.CTF_BLOG_POST_TYPE_ID)
      .then((entries) => {
        return {
          posts: entries.items,
        }
      })
      .catch(console.error)
  },
}
</script>

<style lang="scss">
.page-index {
  width: 100%;
  min-height: 100vh;
}

.index-main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    font-weight: 400;
  }
}
</style>
