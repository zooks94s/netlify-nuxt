<template lang="pug">
  .site-wrapper
    GlobalHeader
    Nuxt
    GlobalFooter
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>
