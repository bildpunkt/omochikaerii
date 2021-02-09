<template>
  <div :class="classes">
    <div class="d-flex justify-content-between">
      <div>
        {{ entry.title }}
      </div>
      <div class="text-right text-black-50">
        Weight:
        <span class="font-monospace" v-html="entry.weight"/>
      </div>
    </div>
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