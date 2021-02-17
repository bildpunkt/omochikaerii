import { reactive, computed, watch } from 'vue'
import { filterSeriesByArc, filterSeriesByStatus, filterSeriesByType } from './filters'
import data from './data'

const state = reactive({
  seriesData: data,
  filteredData: [],
  filterValue: '',
  showWeights: true
})

const entries = computed(() => state.seriesData.flatMap((series) => series.entries))
const entryCount = computed(() => entries.value.length)
const entryWeight = computed(() => entries.value.reduce((prev, next) => prev + next.weight, 0).toFixed(2))

const completedEntries = computed(() => entries.value.filter(entry => entry.done == true))
const completedEntryCount = computed(() => completedEntries.value.length)
const completedEntryWeight = computed(() => completedEntries.value.reduce((prev, next) => prev + next.weight, 0).toFixed(2))
const completedPercentage = computed(() => ((((completedEntryWeight.value / entryWeight.value)) * 100).toFixed()))

watch(
  () => state.filterValue,
  (filter) => {
    if (filter === '') {
      state.filteredData = []
    }
    else {
      if (filter.startsWith('arc:')) {
        state.filteredData = filterSeriesByArc(filter)
      }
      else if (filter.startsWith('type:')) {
        state.filteredData = filterSeriesByType(filter)
      }
      else if (filter.startsWith('status:')) {
        state.filteredData = filterSeriesByStatus(filter)
      }
    }
  }
)

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