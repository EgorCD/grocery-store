import * as React from 'react';
import { useState, useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { initializeAuthListener } from './services/auth';
import { CartProvider } from './context/CartContext';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const removeAuthListener = initializeAuthListener(setAuthenticated);

    return () => {
      removeAuthListener();
    };

  }, []);

  return (
    <CartProvider>
      <AppNavigator isAuthenticated={isAuthenticated} />
    </CartProvider>
  );
}

export default App;