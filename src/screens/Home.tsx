import {
  ArrowRight,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import { ItemMenu } from '../components'
import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Home = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <ItemMenu className='flex-column gap-1' />
      </Main>
      <Footer variant='end'>
        <NavLink to='/review' className='button accent solid'>
          Review Order
          <i><ArrowRight /></i>
        </NavLink>
      </Footer>
    </Screen>
  )
}

export { Home }
