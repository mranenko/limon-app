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
        <Link to='/review'>
          <i><ArrowLeft /></i>
        </Link>
        <Button as='a' href='/payment' variant='accent solid'>
          Continue
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Checkout }
