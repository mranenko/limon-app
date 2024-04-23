import {
  ArrowLeft,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

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
      <Footer>
        <Link to='/'>
          <i><ArrowLeft /></i>
        </Link>
      </Footer>
    </Screen>
  )
}

export { Confirmation }
