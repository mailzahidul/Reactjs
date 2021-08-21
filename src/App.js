import logo from './logo.svg';
import './App.css';
import Func from './mycomponents/Func';
import ClassCom from './mycomponents/ClassCom';
import ArroFunc from './mycomponents/ArroFunc';
import Func2nd from './mycomponents/Func2nd';
import Class2nd from './mycomponents/Class2nd';
import State from './mycomponents/State';
import Start2nd from './mycomponents/Start2nd';
import State3rd from './mycomponents/State3rd';

function App() {
  return (
    <div className="App">
      <Func name="Zahidul" age="28"></Func>

      <ClassCom></ClassCom>
      <ArroFunc></ArroFunc>
      <ArroFunc/>


      <Func2nd/>
      <Class2nd/>
      <State/>
      <Start2nd/>
      <State3rd/>
    </div>
  );
}

export default App;
