import clone from './utilities/clone'
import data from './data'

function removePrefixFromFilter(value, prefix) {
  return value.replace(`${prefix}:`, '')
}

export const filterSeriesByArc = (filter) => {
  const arc = removePrefixFromFilter(filter, 'arc')
  const initialData = clone(data)

  return initialData.map(series => {
    series.entries = series.entries.filter(entry => entry.tags.includes(arc))
    return series
  })
}

export const filterSeriesByStatus = (filter) => {
  const status = removePrefixFromFilter(filter, 'status')
  const initialData = clone(data)

  return initialData.map(series => {
    switch (status) {
      case 'done':
        series.entries = series.entries.filter(entry => entry.done)
        break
      case 'progress':
        series.entries = series.entries.filter(entry => !entry.done)
        break
    }

    return series
  })
}

export const filterSeriesByType = (filter) => {
  const type = removePrefixFromFilter(filter, 'type')
  const initialData = clone(data)

  return initialData.filter(series => series.type === type)
}