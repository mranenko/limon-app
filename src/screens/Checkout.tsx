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
        <NavLink to='/review' className='button accent icon link'>
          <i><ArrowLeft /></i>
        </NavLink>
        <NavLink to='/payment' className='button accent solid'>
          Continue
          <i><ArrowRight /></i>
        </NavLink>
      </Footer>
    </Screen>
  )
}

export { Checkout }
