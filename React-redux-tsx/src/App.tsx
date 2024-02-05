import './App.css'
import { CakeView } from './feature/cake/cakeView'
import IceCreamView from './feature/icecream/iceCream'
import UserView from './feature/user/userView'


function App() {
  return (
    <div>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App
