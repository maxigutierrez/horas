import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (e) => {
      setHasError(true);
      setError(e);
    };


    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError)


    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  if (hasError) {
    return <div>Algo salió mal. Por favor, inténtalo más tarde.</div>;
  }

  return children;
};

export default ErrorBoundary;
