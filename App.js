import * as React from 'react';
import { useState, useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { initializeAuthListener } from './services/AuthService';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const removeAuthListener = initializeAuthListener(setAuthenticated);

    return () => {
      removeAuthListener();
    };

  }, []);

  return <AppNavigator isAuthenticated={isAuthenticated} />;
}

export default App;