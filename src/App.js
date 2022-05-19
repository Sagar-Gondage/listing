import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show Todo App" : "Show Counter App"}
      </button>
      {/* {toggle ? <Counter/> : null} */}
      {/* {toggle && <Counter/>} */}
      {toggle ? <Counter /> : <TodoApp/>}
    </div>)



  // <div className="App">
  //   <button onClick={() => setToggle(!toggle)}>
  //     {toggle ? "Hide Evetything" : "Show Components"}
  //   </button>
  //   {/* {toggle ? <Counter/> : null} */}
  //   {/* {toggle && <Counter/>} */}
  //   {!toggle || <Counter />}
  // </div>)
}

export default App;
