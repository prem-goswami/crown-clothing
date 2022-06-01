import './routes/home/home.component'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication'
import Checkout from './routes/checkout/checkoutPage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop/>} />
        <Route path='/sign-in' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App