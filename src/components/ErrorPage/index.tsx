import { Box, Text } from 'grommet'
import React from 'react'

interface Props {
  errorMessage: string
}

export const ErrorPage: React.FC<Props> = ({ errorMessage }) => (
  <Box>
    <Text>{errorMessage}</Text>
  </Box>
)
