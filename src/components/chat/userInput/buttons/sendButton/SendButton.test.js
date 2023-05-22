import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import SendButton from './SendButton';

test('renders button', () => {
  const mock = jest.fn();
  // render the component
  render(<SendButton onClick={mock} isLoading={false} />);

  // Find the button element
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion
  expect(button).toBeInTheDocument();
  expect(button.firstChild).toHaveClass('fa-paper-plane');

  expect(mock).toHaveBeenCalled();
});

test('renders loading dots', () => {
  // render the component
  render(<SendButton isLoading={true} />);
  // Find the loading dots element
  const loadingDots = screen.queryByText('.');

  // Assertion
  expect(loadingDots).toBeInTheDocument();
});

test('does not render button when isLoading is true', () => {
  // render the component with isLoading set to true
  render(<SendButton isLoading={true} />);

  // Attempt to find the button element
  const button = screen.queryByRole('button');

  // Assertion
  expect(button).toBeNull();
});

test('does not render loading dots when isLoading is false', () => {
  // render the component with isLoading set to false
  render(<SendButton isLoading={false} />);

  // Attempt to find the loading dots element
  const loadingDots = screen.queryByText('.');

  // Assertion
  expect(loadingDots).toBeNull();
});
