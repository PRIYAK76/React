import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [c1, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Hello priya</h1>
          <button className="btn btn-outline-dark " onClick={()=>setCount((c1)=>c1+1)}>
            Submit = {c1}
          </button>
     </div> 
    </>
  )
}

export default App;




  //    <div>
  //    <a href="https://vitejs.dev" target="_blank">
  //      <img src={viteLogo} className="logo" alt="Vite logo" />
  //    </a>
  //    <a href="https://react.dev" target="_blank">
  //      <img src={reactLogo} className="logo react" alt="React logo" />
  //    </a>
  //  </div>
  //  <h1>Vite + React</h1>
  //  <div className="card">
  //    <button onClick={() => setCount((count) => count + 1)}>
  //      count is {count}
  //    </button>
  //    <p>
  //      Edit <code>src/App.jsx</code> and save to test HMR
  //    </p>
  //  </div>
  //  <p className="read-the-docs">
  //    Click on the Vite and React logos to learn more
  //  </p>