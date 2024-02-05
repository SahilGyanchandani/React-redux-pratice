import React from "react"
import Arrays from "./Component/Array"
import Fruit from "./Component/Array"
import ConditionComponent from "./Component/ConditionComponent"
import Counter from "./Component/Counter"
import DataFetching from "./Component/DataFetching"
import Hello from "./Component/Hello"
import HookMouse from "./Component/HookMouse"
import Input from "./Component/Input"
import IntervalCounter from "./Component/IntervalHookCounter"
import SingleData from "./Component/SingleData"
import MouseContainer from "./Component/mouseContainer"
import CountAndDom from "./Component/useEffectDom"

export  const userContext=React.createContext()
function App() {
  return (
    <>
      <userContext.Provider value={'sahil'}>
        <Arrays/>
      </userContext.Provider>
      
    </>
  )
}

export default App
