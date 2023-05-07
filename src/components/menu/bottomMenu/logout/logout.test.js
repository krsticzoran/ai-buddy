import { render, screen, fireEvent } from '@testing-library/react';
import Logout from './Logout';

describe('Logout', () => {
  test('renders a button with text "Log out"', () => {
    render(<Logout />);
    const logoutButton = screen.getByRole('button', { name: /log out/i });
    expect(logoutButton).toBeInTheDocument();
  });

  test('calls the logout function when the button is clicked', () => {});
});
