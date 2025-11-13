import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greetings from './topics/greetings.jsx'
import CarComponent from './topics/CarComponent.jsx'
import ClickCounter from './topics/clickCounter.jsx'
// import Cars from './topics/CarComponent.jsx'
import EventClicker from './topics/reactEvent.jsx'
import UserProfile from './topics/useEffect.jsx'
import UserForm from './topics/Form.jsx'
import ParentGreeting from './topics/properties.jsx'
import Rrouter from './topics/router.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greetings/> */}
    {/* <CarComponent/> */}
    {/* <ClickCounter/> */}
    {/* <Cars/> */}
    {/* <EventClicker/> */}
    {/* <UserProfile userId={1}/> */}
    {/* <UserForm/> */}
    {/* <ParentGreeting/> */}
    <Rrouter/>
  </StrictMode>,
)
