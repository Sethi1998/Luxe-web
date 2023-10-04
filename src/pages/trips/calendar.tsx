import { Trips } from '@/components/Trips'
import Calendar from '@/components/Trips/Calendar'
import Container from '@/components/common/Container'
import { Hostlayout } from '@/components/common/Layout/Hostlayout'

const CalendarPage = () => {
  return (
    <Hostlayout>
    <Container>
      <Trips />
      <Calendar />
    </Container>
  </Hostlayout> 
  )
}

export default CalendarPage