import { render, screen } from '@testing-library/react';
import LoadingDots from './LoadingDots';

test('renders loading dots', () => {
  // Render the component
  render(<LoadingDots />);

  // Find the loading dots element
  const loadingDots = screen.getByText('.');

  // Assertion
  expect(loadingDots).toBeInTheDocument();
});

test('updates dots animation', () => {
  // Render the component
  render(<LoadingDots />);

  // Find the loading dots element
  const loadingDots = screen.getByText('.');

  // Wait for the animation to update
  setTimeout(() => {
    // Assertion - Verify the number of dots after the first update
    expect(loadingDots.textContent).toBe('..');

    // Wait for the animation to update again
    setTimeout(() => {
      // Assertion - Verify the number of dots after the second update
      expect(loadingDots.textContent).toBe('...');

      // Wait for the animation to update again
      setTimeout(() => {
        // Assertion - Verify the number of dots after the third update
        expect(loadingDots.textContent).toBe('.');
      }, 400);
    }, 400);
  }, 400);
});
