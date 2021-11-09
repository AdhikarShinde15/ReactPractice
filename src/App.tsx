import CustomHookComponent from "./component/CustomHookComponent";
import UseContextComp from "./component/UseContext";
import UseEffectComponent from "./component/UseEffectComp";
import UseRefComp from "./component/UseRefComp";
import UserReducerComp from "./component/UserReducerComp";
import UseStateComponent from "./component/UseStateComponent";


const  App = () => {
  return (
    <div>
      <h1>Custom Hook Component</h1>
      <CustomHookComponent/>
      <h1>UseRef</h1>
      <UseRefComp/>
      <h1>useReducer</h1>
      <UserReducerComp/>
      <h1>useContext</h1>
      <UseContextComp/>
      <h1>useEffect</h1>
      <UseEffectComponent/>
      <h1>useState</h1>
      <UseStateComponent/>
    </div>
  );
}

export default App;
