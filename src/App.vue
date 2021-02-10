<template>
  <div class="container">
    <h1><i>omochikaerii~</i> - Higurashi Marathon Tracker</h1>
    <p class="text-muted">
      This webpage is a public tracker of <a href="https://twitter.com/pixeldesu">@pixeldesu</a>'s journey through all of <b>Higurashi no Naku Koro ni</b> by 07th Expansion.
    </p>
    <p>
      Currently {{ global.completedEntryCount }} <span v-if="global.showWeights">(weight: <code v-html="global.completedEntryWeight" />) </span>out of the {{ global.entryCount }} total entries <span v-if="global.showWeights">(weight: <code v-html="global.entryWeight" />) </span>have been finished, amounting to about {{ global.completedPercentage }}% completion! The list is weighted by the approximate time a single entry
      takes to be finished (in hours), that's why the completion percentage does probably not match up with the actual finished count.
    </p>
    <div class="progress mb-5">
      <div class="progress-bar bg-success" role="progressbar" :style="'width: ' + global.completedPercentage + '%'" :aria-valuenow="global.completedPercentage" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="clearfix">
      <div class="form-check form-switch float-end">
        <input class="form-check-input" type="checkbox" id="weight-input" v-model="global.showWeights">
        <label class="form-check-label" for="weight-input">Show weights</label>
      </div>
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
import global from './state'
import seriesData from './data'

export default {
  name: 'App',
  data: function() {
    return {
      seriesData: seriesData,
      global
    }
  },
  components: {
    MarathonSection
  },
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>