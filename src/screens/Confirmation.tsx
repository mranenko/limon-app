import {
  ArrowLeft,
} from '@phosphor-icons/react'

import {
  Button,
} from '../components'
import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Confirmation = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Thank You</h2>
        </section>
      </Main>
      <Footer variant='start'>
        <Button as='a' href='/' variant='accent icon link'>
          <i><ArrowLeft /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Confirmation }
