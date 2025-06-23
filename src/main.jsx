import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './page/Home'
import AddRestaurants from './page/AddRestaurants'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddRestaurants />
  </StrictMode>,
)
