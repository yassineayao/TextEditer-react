import React, { createContext, useState } from 'react';

// Create a context for the app
export const AppContext = createContext();
// export const AppContexts = createContext();

// Create a provider component to wrap the app with the context
export const AppProvider = ({ children }) => {
  const [state, setState] = useState('');

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};