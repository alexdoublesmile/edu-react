import React, { Suspense } from 'react';
import { useResource } from './resource';
import Posts from './Posts';
import Users from './Users';

function App() {
  const resource = useResource();

  return (
    <div className="container">
      <h1>Suspense for Data fetching</h1>

      {/* <Suspense fallback={<p>Loading posts...</p>}>
        <Posts resource={resource} />
      </Suspense>
      
      <Suspense fallback={<p>Loading users...</p>}>
        <Users resource={resource} />
      </Suspense> */}
      
      <Suspense fallback={<p>Loading all...</p>}>
        <Posts resource={resource} />
        <Users resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
