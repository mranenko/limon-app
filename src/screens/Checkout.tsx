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

const Checkout = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Checkout</h2>
        </section>
      </Main>
      <Footer>
        <Button as='a' href='/review' variant='accent icon link'>
          <i><ArrowLeft /></i>
        </Button>
        <Button as='a' href='/payment' variant='accent solid'>
          Continue
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Checkout }
