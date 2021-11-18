import { Box, ResponsiveContext } from 'grommet'
import React from 'react'

export const ContentLayout: React.FC = ({ children }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box
        responsive={true}
        margin={
          size === 'small'
            ? { vertical: 'medium', horizontal: '8%' }
            : {
                vertical: 'large',
                horizontal: size === 'medium' ? '20%' : '26%',
              }
        }
      >
        {children}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)
