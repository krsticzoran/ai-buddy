import { render, screen, waitFor, act } from '@testing-library/react';
import RecordingDots from './RecordingDots';

test('renders the recording dots', () => {
  // Render the component
  render(<RecordingDots />);

  // Find the loading dots element
  const recordingDots = screen.getByText('.');

  // Assertion
  expect(recordingDots).toBeInTheDocument();
});

test('updates dots animation', async () => {
  // Render the component
  render(<RecordingDots />);

  // Find the loading dots element
  const recordingDots = screen.getByText('.');

  // Wait for the first update
  await waitFor(() => expect(recordingDots.textContent).toBe('..'), {
    timeout: 400,
  });

  // Wait for the second update
  await waitFor(() => expect(recordingDots.textContent).toBe('...'), {
    timeout: 400,
  });

  // Wait for the third update
  await waitFor(() => expect(recordingDots.textContent).toBe('....'), {
    timeout: 400,
  });
});
jest.useFakeTimers();
test('calls recordingStop when dots length exceeds 65', () => {
  const mockRecordingStop = jest.fn();
  render(<RecordingDots recordingStop={mockRecordingStop} />);
  global.innerWidth = 1500;
  act(() => {
    // Advance the timers by a sufficient amount of time
    jest.advanceTimersByTime(19800); // Assuming each dot takes 300ms
  });

  // Assertion - Verify that the recordingStop function is called
  expect(mockRecordingStop).toHaveBeenCalled();
});

test('calls recordingStop when dots length exceeds 22 and resolution is less than 1400', () => {
  const mockRecordingStop = jest.fn();
  render(<RecordingDots recordingStop={mockRecordingStop} />);
  global.innerWidth = 1200;
  act(() => {
    // Advance the timers by a sufficient amount of time
    jest.advanceTimersByTime(6600); // Assuming each dot takes 300ms
  });

  // Assertion - Verify that the recordingStop function is called
  expect(mockRecordingStop).toHaveBeenCalled();
});
