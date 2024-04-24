import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'

import {
  Button,
  Card,
} from '../components'
import {
  Footer,
  Header,
  Main,
  Screen,
} from '../layouts'

const Payment = () => {
  return (
    <Screen>
      <Header />
      <Main>
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Payment</h2>
          <Card>
            <p className='input-group'>
              <label htmlFor='card-number'>Card number</label>
              <input className='text' id='card-number' placeholder='**** **** **** ****' type='text' />
            </p>
            <div className='flex-row gap-1'>
              <p className='input-group'>
                <label htmlFor='card-number'>Expiry</label>
                <input className='text' id='card-number' placeholder='MM / YY' type='text' />
              </p>
              <p className='input-group'>
                <label htmlFor='card-number'>CVN</label>
                <input className='text' id='card-number' placeholder='***' type='text' />
              </p>
            </div>
            <p className='input-group'>
              <label htmlFor='card-number'>Name on card</label>
              <input className='text' id='card-number' type='text' />
            </p>
          </Card>
        </section>
      </Main>
      <Footer>
        <Button as='a' href='/checkout' variant='accent icon link'>
          <i><ArrowLeft /></i>
        </Button>
        <Button as='a' href='/confirmation' variant='accent solid'>
          Place Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Payment }
