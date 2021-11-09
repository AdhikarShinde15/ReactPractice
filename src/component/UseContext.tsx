import { useState } from 'react'
import UserContext, { UserState } from '../store/store'
import ConsumerComponent from './ConsumerComponent'

const UseContextComp = () => {
    const [user, setUser] = useState<UserState>({
     first: "Jane",
     last: "Smith"
    })
    return (
        <UserContext.Provider value={user}>
         <ConsumerComponent/>
         <button onClick={() => setUser({
             first: "Mary",
             last: "Jane"
         })}>Change Context</button>
        </UserContext.Provider>
    )
}

export default UseContextComp
