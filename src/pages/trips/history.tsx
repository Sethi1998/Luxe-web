import { Trips } from '@/components/Trips'
import { History } from '@/components/Trips/History'
import Container from '@/components/common/Container'
import { Hostlayout } from '@/components/common/Layout/Hostlayout'
import React from 'react'

const HistoryPage = () => {
  return (
    <Hostlayout>
    <Container>
      <Trips />
      <History />
    </Container>
  </Hostlayout>
  )
}

export default HistoryPage