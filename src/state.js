import { reactive, computed } from 'vue'
import data from './data'

const state = reactive({
  seriesData: data,
  showWeights: true
})

const entries = computed(() => state.seriesData.flatMap((series) => series.entries))
const entryCount = computed(() => entries.value.length)
const entryWeight = computed(() => entries.value.reduce((prev, next) => prev + next.weight, 0).toFixed(2))

const completedEntries = computed(() => entries.value.filter(entry => entry.done == true))
const completedEntryCount = computed(() => completedEntries.value.length)
const completedEntryWeight = computed(() => completedEntries.value.reduce((prev, next) => prev + next.weight, 0).toFixed(2))
const completedPercentage = computed(() => ((((completedEntryWeight.value / entryWeight.value)) * 100).toFixed()))

export default {
  state,
  entries,
  entryCount,
  entryWeight,
  completedEntries,
  completedEntryCount,
  completedEntryWeight,
  completedPercentage
}