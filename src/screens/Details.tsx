import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import menu from '../data/menu.json'
import {
  Button,
} from '../components'
import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Details = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Item title</h2>
          <p>Item description</p>
        </section>
      </Main>
      <Footer>
        <Link to='/'>
          <i><ArrowLeft /></i>
          Back to Menu
        </Link>
        <Button as='a' href='/review' variant='accent solid'>
          Review Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Details }
