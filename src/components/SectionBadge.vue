<template>
  <div class="mt-0 mb-1 order-sm-last align-self-sm-center">
    <span :class="classes">{{ type }}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionBadge',
  props: {
    type: String
  },
  computed: {
    classes: function() {
      const defaultClasses = {
        badge: true,
        'bg-light': true,
        'text-dark': true,
        'border': true
      }

      const visualNovelClasses = {
        'border-success': true
      }

      const mangaClasses = {
        'border-info': true
      }

      const animeClasses = {
        'border-warning': true
      }

      return {
        ...defaultClasses,
        ...(this.type === 'Visual Novel' ? visualNovelClasses : {}),
        ...(this.type === 'Manga' ? mangaClasses : {}),
        ...(this.type === 'Anime' ? animeClasses : {})
      }
    }
  }
}
</script>