import { render, screen, waitFor } from '@testing-library/react';
import LoadingDots from './LoadingDots';

test('renders loading dots', () => {
  // Render the component
  render(<LoadingDots />);

  // Find the loading dots element
  const loadingDots = screen.getByText('.');

  // Assertion
  expect(loadingDots).toBeInTheDocument();
});

test('updates dots animation', async () => {
  // Render the component
  render(<LoadingDots />);

  // Find the loading dots element
  const loadingDots = screen.getByText('.');

  await waitFor(() => expect(loadingDots.textContent).toBe('..'), {
    timeout: 400,
  });

  await waitFor(() => expect(loadingDots.textContent).toBe('...'), {
    timeout: 400,
  });

  await waitFor(() => expect(loadingDots.textContent).toBe('.'), {
    timeout: 400,
  });
});
