<template>
  <div :class="classes">
    <div class="d-flex justify-content-between">
      <div>
        {{ entry.title }}
      </div>
      <div class="text-right text-black-50 fs-6" v-if="global.showWeights">
        Weight: {{ entry.weight }}
      </div>
    </div>
  </div>
</template>

<script>
import global from '../state'

export default {
  name: 'SectionItem',
  props: {
    entry: Object
  },
  data: function() {
    return {
      global
    }
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