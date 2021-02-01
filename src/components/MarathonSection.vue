<template>
  <div class="card shadow border-0 mb-5">
    <div class="progress rounded-0 rounded-top">
      <div class="progress-bar bg-success" role="progressbar" :style="'width: ' + completedPercentage + '%'" :aria-valuenow="completedPercentage" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="card-body">
      <h2 class="mb-0">
        <span class="badge bg-secondary">{{ data.type }}</span>
        {{ data.title }}
      </h2>
      <p class="text-muted mt-1 mb-0" v-if="data.note">
        <strong>Note:</strong> {{ data.note }}
      </p>
    </div>
    <div class="list-group list-group-flush">
      <section-item v-for="entry in data.entries" :key="entry.title" :entry="entry"/>
    </div>
  </div>
</template>

<script>
import SectionItem from './SectionItem.vue'

export default {
  name: 'MarathonSection',
  components: {
    SectionItem
  },
  props: {
    data: Object
  },
  computed: {
    completedPercentage: function() {
      const completedEntries = (this.data.entries.filter((entry) => entry.done === true)).length

      return ((completedEntries / this.data.entries.length) * 100).toFixed()
    }
  }
}
</script>