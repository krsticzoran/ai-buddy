import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import configureStore from 'redux-mock-store';

// Mock Redux store
const store = configureStore()({
  auth: {
    isLoggedIn: false,
  },
});

// Mock dispatch function
store.dispatch = jest.fn();

describe('SignUpPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUpPage />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders signup form', () => {
    const userInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const signUpButton = screen.getByRole('button', { name: 'Sign up' });
    const loginUpLink = screen.getByRole('link', { name: 'Login now!' });

    expect(userInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    expect(loginUpLink).toBeInTheDocument();
  });

  test('displays error message on sign up failure', async () => {
    const userInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const signUpButton = screen.getByRole('button', { name: 'Sign up' });
    const loginUpLink = screen.getByRole('link', { name: 'Login now!' });

    // Enter incorrect login credentials
    fireEvent.change(userInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(signUpButton);

    // Wait for the error message to appear
    const errorMessage = await screen.findByText('Please enter a username');
    expect(errorMessage).toBeInTheDocument();
  });
  test('displays error message on sign up failure', async () => {
    const userInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const signUpButton = screen.getByRole('button', { name: 'Sign up' });
    const loginUpLink = screen.getByRole('link', { name: 'Login now!' });

    // Enter incorrect sing up credentials
    fireEvent.change(userInput, { target: { value: 'user' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(signUpButton);

    // Wait for the error message to appear
    const errorMessage = await screen.findByText(
      'Incorrect email or password. Please try again.'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
