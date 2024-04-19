import { Card } from '../components'
import {
  Header,
  Main,
  Screen,
} from '../layouts'
import menu from '../data/menu.json'

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
                <Card key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              )
            })}
          </div>

          <h2 className='subtitle'>Soups</h2>
          <div className='cards'>
            {menu.soups.map((item) => {
              return (
                <Card key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              )
            })}
          </div>
        </section>
      </Main>
    </Screen>
  )
}

export { Home }
