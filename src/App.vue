<template>
  <div class="container">
    <h1><i>omochikaerii~</i> - Higurashi Marathon Tracker</h1>
    <p class="text-muted">
      This webpage is a public tracker of <a href="https://twitter.com/pixeldesu">@pixeldesu</a>'s journey through all of <b>Higurashi no Naku Koro ni</b> by 07th Expansion.
    </p>
    <p>
      Currently {{ completedEntryCount }} (weight: <code v-html="completedWeight" />) out of the {{ entryCount }} total entries (weight: <code v-html="entryWeight" />) have been finished, amounting to about {{ totalCompletionPercentage}}% completion! The list is weighted by the approximate time a single entry
      takes to be finished (in hours), that's why the completion percentage does probably not match up with the actual finished count.
    </p>
    <div class="progress mb-5">
      <div class="progress-bar bg-success" role="progressbar" :style="'width: ' + totalCompletionPercentage + '%'" :aria-valuenow="totalCompletionPercentage" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <marathon-section v-for="seriesEntry in seriesData" :key="seriesEntry.title" :data="seriesEntry"/>
    <footer>
      <hr/>
      <p class="text-muted">
        <a class="text-reset font-monospace text-decoration-none" href="https://github.com/pixeldesu/omochikaerii">omochikaerii~</a> built by <a class="text-reset" href="https://github.com/pixeldesu">pixeldesu</a>
      </p>
    </footer>
  </div>
</template>

<script>
import MarathonSection from './components/MarathonSection.vue'
import seriesData from './data'

export default {
  name: 'App',
  data: function() {
    return {
      seriesData: seriesData
    }
  },
  components: {
    MarathonSection
  },
  computed: {
    entryCount: function() {
      let allEntries = []

      this.seriesData.forEach((seriesEntry) => {
        allEntries = allEntries.concat(seriesEntry.entries)
      })

      return allEntries.length
    },
    entryWeight: function() {
      let allEntries = []
      let fullWeight = 0

      this.seriesData.forEach((seriesEntry) => {
        allEntries = allEntries.concat(seriesEntry.entries)
      })

      allEntries.forEach((entry) => {
        fullWeight += entry.weight
      })

      return fullWeight.toFixed(2)
    },
    completedEntryCount: function() {
      let allEntries = []

      this.seriesData.forEach((seriesEntry) => {
        allEntries = allEntries.concat(seriesEntry.entries)
      })

      return (allEntries.filter((entry) => entry.done === true)).length
    },
    completedWeight: function() {
      let allEntries = []
      let completedWeight = 0

      this.seriesData.forEach((seriesEntry) => {
        allEntries = allEntries.concat(seriesEntry.entries)
      })

      const completedEntries = (
        allEntries.filter((entry) => entry.done === true)
        )

      completedEntries.forEach((entry) => {
        completedWeight += entry.weight
      })

      return completedWeight.toFixed(2)
    },
    totalCompletionPercentage: function() {
      let allEntries = []
      let fullWeight = 0
      let completedWeight = 0

      this.seriesData.forEach((seriesEntry) => {
        allEntries = allEntries.concat(seriesEntry.entries)
      })

      allEntries.forEach((entry) => {
        fullWeight += entry.weight
      })

      const completedEntries = (
        allEntries.filter((entry) => entry.done === true)
        )

      completedEntries.forEach((entry) => {
        completedWeight += entry.weight
      })

      return ((completedWeight / fullWeight) * 100).toFixed()
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>