import { Grommet } from 'grommet'
import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/styles.css'
import { theme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Grommet theme={theme}>
    <Component {...pageProps} />
  </Grommet>
)

export default MyApp
