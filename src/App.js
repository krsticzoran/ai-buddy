import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { ChatContextProvider } from './store/chat-context';

import AppPage from './pages/AppPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Provider store={store}>
      <ChatContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/app" element={<AppPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ChatContextProvider>
    </Provider>
  );
};

export default App;
