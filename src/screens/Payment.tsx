import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'

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
        <Button as='a' href='/checkout' variant='accent icon link'>
          <i><ArrowLeft /></i>
        </Button>
        <Button as='a' href='/confirmation' variant='accent solid'>
          Place Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Payment }
