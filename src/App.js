import './App.css';

import * as React from 'react'
import Card from './components/Card'

function App() {
  let [data, setData] = React.useState({})

React.useEffect(function() {
  fetch ("https://swapi.dev/api/starships")
  .then(res => res.json())
  .then(data => setData(data.results))
}, []) 


  return (
    <div>
      <Card cards={ data }/>
    </div>
  );
}

export default App;
