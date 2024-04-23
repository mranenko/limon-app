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

const Review = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Review Order</h2>
        </section>
      </Main>
      <Footer>
        <Button as='a' href='/' variant='accent icon link'>
          <i><ArrowLeft /></i>
        </Button>
        <Button as='a' href='/checkout' variant='accent solid'>
          Checkout
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Review }
