import {
  Route,
  Routes,
} from 'react-router-dom'

import './assets/styles/index.scss'
import {
  Checkout,
  Confirmation,
  Details,
  Home,
  Payment,
  Review,
} from './screens'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/confirmation' element={<Confirmation />} />
      <Route path='/details' element={<Details />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/review' element={<Review />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default App
