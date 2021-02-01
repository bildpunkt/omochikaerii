<template>
  <div :class="classes">
    {{ entry.title }}
  </div>
</template>

<script>
export default {
  name: 'SectionItem',
  props: {
    entry: Object
  },
  computed: {
    classes: function() {
      return {
        'list-group-item': true,
        'list-group-item-success': this.entry.done
      }
    }
  }
}
</script>