'use client'

import Menu from '@/components/nav'
import { Grid, Flex } from '@chakra-ui/react'


export default function Home() {
  return (
    <Grid p={5}>
      <Flex
        h='100vh'
      >
        <Menu />
      </Flex>
    </Grid>
  )
}
