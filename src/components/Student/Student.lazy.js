import React, { lazy, Suspense } from 'react';

const LazyStudent = lazy(() => import('./Student'));

const Student = props => (
  <Suspense fallback={null}>
    <LazyStudent {...props} />
  </Suspense>
);

export default Student;
