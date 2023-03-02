import { useState } from "react";

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0)
  return (
    <div className="container mt-5">
      <h2>Counter</h2>
      <hr />
      <h1>{counter}</h1>
      <h4>Counter</h4>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter)
        }}
        type="button"
        className="btn btn-success">
        + 1
      </button>
      <h4>Discounter</h4>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter)
        }}
        type="button"
        className="btn btn-danger">
        - 1
      </button>
      <h4>Restart</h4>
      <button
        onClick={() => {
          setCounter(0);
          console.log(counter)
        }}
        type="button"
        className="btn btn-warning">
        0
      </button>
    </div>


  )
}

export default App
