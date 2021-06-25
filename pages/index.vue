<template>
  <div class="main-content">
    <ul>
      <li v-for="post in posts" :key="post">{{ post.fields.title }}</li>
    </ul>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  asyncData({ env, params }) {
    return client
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
.main-content {
  width: 100%;
}
</style>
