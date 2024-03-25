import React, { lazy, Suspense } from 'react';

const LazyCreateStudent = lazy(() => import('./CreateStudent'));

const CreateStudent = props => (
  <Suspense fallback={null}>
    <LazyCreateStudent {...props} />
  </Suspense>
);

export default CreateStudent;
