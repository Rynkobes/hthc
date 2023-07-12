'use client'

import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
          <Text>Welcome to Help the Helpless Charity Website</Text>
        </Box>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
