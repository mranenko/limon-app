import { Route, Routes } from 'react-router-dom'

import './assets/styles/index.scss'
import {
  Home,
} from './screens'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default App
