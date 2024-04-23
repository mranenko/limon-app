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
        <Link to='/'>
          <i><ArrowLeft /></i>
        </Link>
        <Button as='a' href='/checkout' variant='accent solid'>
          Checkout
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Review }
