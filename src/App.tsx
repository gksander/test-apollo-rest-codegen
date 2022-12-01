import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { graphql } from "./gql";
import { useQuery } from "@apollo/client";

/**
 * Write a query. Run `yarn gen:types` after changing (or setup a watcher).
 */
const query = graphql(/* GraphQL */ `
  query FirstPerson {
    person @rest(type: "Person", path: "people/1/") {
      name
      age
    }
  }
`);

function App() {
  const [count, setCount] = useState(0);
  // query your data, notice that it's strongly typed.
  const { data } = useQuery(query);
  const name = data?.person?.name;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
