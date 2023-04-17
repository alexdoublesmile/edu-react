import React from 'react';
import { useResource } from './resource';
import Posts from './Posts';

const resource = useResource();

function App() {

  return (
    <div className="container">
      <h1>Suspense for Data fetching</h1>

      <Posts resource={resource} />
    </div>
  );
}

export default App;
