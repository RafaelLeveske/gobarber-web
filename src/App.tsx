import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import AuthContext from './hooks/auth';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Rafael' }}>
        <SignIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
