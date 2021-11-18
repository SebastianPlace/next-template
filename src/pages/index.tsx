import { Heading, Text } from 'grommet'
import Head from 'next/head'
import React from 'react'
import { ContentLayout } from '../components/ContentLayout'

const Home: React.FC = () => (
  <>
    <Head>
      <title>Next TS starter</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <ContentLayout>
      <Heading level={1}>Next TS starter</Heading>
      <Text>Let&apos;s get started</Text>
    </ContentLayout>
  </>
)

export default Home
