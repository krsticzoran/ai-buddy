import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { AuthContextProvider } from './store/auth-contex';
import { ChatContextProvider } from './store/chat-context';

import AppPage from './pages/AppPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/app" element={<AppPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Navigate to="/signup" />} />
          </Routes>
        </BrowserRouter>
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;
