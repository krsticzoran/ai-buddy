import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import configureStore from 'redux-mock-store';

// Mock Redux store
const store = configureStore()({
  auth: {
    isLoggedIn: false,
  },
});

// Mock dispatch function
store.dispatch = jest.fn();

describe('LoginPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders login form', () => {
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    const signUpLink = screen.getByRole('link', { name: 'Sign up now!' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  test('displays error message on login failure', async () => {
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Enter incorrect login credentials
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginButton);

    // Wait for the error message to appear
    const errorMessage = await screen.findByText(
      'Incorrect email or password. Please try again.'
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
