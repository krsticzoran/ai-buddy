import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Microphone from './Microphone';

test('it shows a button', () => {
  const mock = jest.fn();
  // render the component
  render(<Microphone onClick={mock} />);

  // Find the button element
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion
  expect(button).toBeInTheDocument();
  expect(button.firstChild).toHaveClass('fa-microphone');

  expect(mock).toHaveBeenCalled();
});
