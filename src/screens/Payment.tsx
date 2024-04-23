import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import {
  Button,
} from '../components'
import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Payment = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Payment Details</h2>
        </section>
      </Main>
      <Footer>
        <Link to='/checkout'>
          <i><ArrowLeft /></i>
        </Link>
        <Button as='a' href='/confirmation' variant='accent solid'>
          Place Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Payment }
