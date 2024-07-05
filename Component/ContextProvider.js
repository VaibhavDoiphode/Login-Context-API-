
import noteContext from './ContextStore'
import RootScreen from './RootScreen'
import { useState } from 'react'
const ContextProvider = () => {
    const [user,setUser]=useState({userName:'',password:''});
  return (
    <noteContext.Provider value={[user,setUser]}>
        <RootScreen/>
    </noteContext.Provider>
  )
}

export default ContextProvider
