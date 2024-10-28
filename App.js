import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebaseConfig';

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const removeAuthListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return () => removeAuthListener();
  }, [auth]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default App;
