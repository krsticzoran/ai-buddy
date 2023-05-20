import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Microphone from './Microphone';

test('it shows a button', () => {
  //render the component
  render(<Microphone />);

  // Find the button elements
  const buttons = screen.getAllByRole('button');

  // Assertion
  expect(buttons).toHaveLength(1);
  expect(buttons[0].firstChild).toHaveClass('fa-microphone');
});
