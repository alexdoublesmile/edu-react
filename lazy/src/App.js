import React, { Suspense } from 'react';
import { useResource } from './resource';
import Posts from './Posts';

function App() {
  const resource = useResource();

  return (
    <div className="container">
      <h1>Suspense for Data fetching</h1>
      
      <Suspense fallback={<p>Loading...</p>}>
        <Posts resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
