import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

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
        <NavLink to='/' className='button accent icon link'>
          <i><ArrowLeft /></i>
        </NavLink>
        <NavLink to='/checkout' className='button accent solid'>
          Checkout
          <i><ArrowRight /></i>
        </NavLink>
      </Footer>
    </Screen>
  )
}

export { Review }
