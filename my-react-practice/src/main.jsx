import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greetings from './topics/greetings.jsx'
import Components from './topics/components.jsx'
import ClickCounter from './topics/clickCounter.jsx'
import Cars from './topics/carComponent.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greetings/> */}
    {/* <Components/> */}
    {/* <ClickCounter/> */}
    ,<Cars/>
  </StrictMode>,
)
