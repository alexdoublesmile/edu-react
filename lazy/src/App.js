import React from 'react';
import { useResource } from './resource';

const resource = useResource();

function App() {

  return (
    <div className="container">
      <h1>Suspense for Data fetching</h1>
    </div>
  );
}

export default App;
