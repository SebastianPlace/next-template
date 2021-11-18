import { Grid, GridExtendedProps, ResponsiveContext } from 'grommet'
import React from 'react'

const defaultColumns: Record<string, string[]> = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
}

export const ResponsiveGrid: React.FC<GridExtendedProps> = ({
  children,
  columns,
  ...props
}) => {
  const size = React.useContext(ResponsiveContext)
  const cols = columns ? (columns as Record<string, string[]>) : defaultColumns

  return (
    <Grid {...props} columns={cols[size]}>
      {children}
    </Grid>
  )
}
