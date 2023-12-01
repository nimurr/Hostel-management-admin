import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './compontnts/Navigation'

function App() {

  return (
    <div className='flex mx-auto'>
      <div className='w-2/12  '>
        {/* <Form></Form> */}
        <Navigation></Navigation>
      </div>
      <div className='w-8/12 mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
