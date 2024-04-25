import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import item from '../data/item.json'
import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Details = () => {
  const menuItem = item;

  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h1 className='title'>{menuItem.title}</h1>
          <p>{menuItem.description}</p>
        </section>
      </Main>
      <Footer>
        <NavLink to='/' className='button accent icon link'>
          <i><ArrowLeft /></i>
        </NavLink>
        <NavLink to='/review' className='button accent solid'>
          Review Order
          <i><ArrowRight /></i>
        </NavLink>
      </Footer>
    </Screen>
  )
}

export { Details }
