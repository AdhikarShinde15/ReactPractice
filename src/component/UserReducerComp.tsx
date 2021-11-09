import { useReducer } from "react"

const initialState = {
    counter: 100
}

type ACTIONTYPES = 
   { type: "Increment"; payload: number }
 | { type: "Decrement"; payload: number }

const counterReducer = (state: typeof initialState, action: ACTIONTYPES) => {
  switch(action.type) {
      case "Increment" :
          return {
              ...state,
              counter: state.counter + action.payload
          }
      case "Decrement" :
          return {
              ...state,
              counter: state.counter - action.payload
          }
      default : 
          return state    
  }
}

const UserReducerComp = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({
                type: "Increment",
                payload: 10
            })}>Increment</button>
            <button onClick={() => dispatch({
                type: "Decrement",
                payload: 5
            })}>Decrement</button>
        </div>
    )
}

export default UserReducerComp
