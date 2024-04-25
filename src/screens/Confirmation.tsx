import {
  ArrowLeft,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Confirmation = () => {
  return (
    <Screen className='confirmation'>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Thank You</h2>
          <p>Your estimated delivery time is:</p>
          <h3>6:15 pm</h3>
          <p>See you soon!</p>
        </section>
      </Main>
      <Footer variant='start'>
        <NavLink to='/' className='button accent icon link'>
          <i><ArrowLeft /></i>
        </NavLink>
      </Footer>
    </Screen>
  )
}

export { Confirmation }
