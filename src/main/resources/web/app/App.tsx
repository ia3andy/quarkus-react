import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import quarkusLogo from './assets/quarkus.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const counter = async (increment = false) => {
    try {
      const response = await fetch('/counter', { method: increment ? 'POST' : 'GET' });
      const count = await response.text();
      setCount(+count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    counter();
  }, []);

  return (
    <>
      <div>
        <a href="https://quarkus.io" target="_blank">
          <img src={`/static/bundle/${quarkusLogo}`} className="logo" alt="Quarkus logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={`/static/bundle/${reactLogo}`} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quarkus + React</h1>
      <div className="card">
        <button onClick={() => counter(true)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Quarkus and React logos to learn more
      </p>
    </>
  )
}

export default App
