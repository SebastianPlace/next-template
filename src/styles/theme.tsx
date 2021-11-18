import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

export const theme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Rubik',
    },
  },
})
