import {
  ArrowRight,
} from '@phosphor-icons/react'

import {
  Button,
  ItemMenu,
} from '../components'
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
        <Button as='a' href='/review' variant='accent solid'>
          Review Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Home }
