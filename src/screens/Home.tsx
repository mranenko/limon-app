import {
  ArrowRight,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import {
  Button,
  Card,
} from '../components'
import menu from '../data/menu.json'
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
        <section className='flex-column gap-1'>
          <h2 className='subtitle'>Appetizers</h2>
          <div className='cards'>
            {menu.appetizers.map((item) => {
              return (
                <Link key={item.title} to='/details'>
                  <Card>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>

          <h2 className='subtitle'>Soups</h2>
          <div className='cards'>
            {menu.soups.map((item) => {
              return (
                <a key={item.title} href='/details'>
                  <Card>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Card>
                </a>
              )
            })}
          </div>
        </section>
      </Main>
      <Footer>
        <Button as='a' href='/review' variant='accent solid'>
          Review Order
          <i><ArrowRight /></i>
        </Button>
      </Footer>
    </Screen>
  )
}

export { Home }
