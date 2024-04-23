import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'

import {
  Button,
} from '../components'
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
        <Button as='a' href='/' variant='accent link'>
          <i><ArrowLeft /></i>
          Back to Menu
        </Button>
        <Button as='a' href='/review' variant='accent solid'>
          Review Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Details }
