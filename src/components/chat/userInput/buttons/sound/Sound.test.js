import { render, screen, waitFor, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import { MemoizedSound } from './Sound';

// Mock the SpeechSynthesisUtterance class
class SpeechSynthesisUtteranceMock {
  constructor(text) {
    this.text = text;
    this.voice = null;
    this.pitch = 1;
    this.rate = 1;
    this.volume = 1;
  }
}

// Mock the speechSynthesis object
window.speechSynthesis = {
  speak: jest.fn(),
  cancel: jest.fn(),
  getVoices: jest.fn().mockReturnValue([
    {
      name: 'Mock Voice',
      lang: 'en-US',
    },
  ]),
};

window.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock;

test('renders the sound button', () => {
  render(<MemoizedSound answer="answer" />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('toggles the sound on and off', async () => {
  render(<MemoizedSound answer="answer" />);
  const button = screen.getByRole('button');

  // Get the first child element of the button
  const iconElement = button.firstChild;

  // Initial state: sound is on
  expect(iconElement).toHaveClass('fa-volume-high');

  // Click the button to toggle sound off
  act(() => {
    user.click(button);
  });
  await waitFor(() => {
    expect(iconElement).toHaveClass('fa-volume-off');
  });

  // Click the button again to toggle sound on
  act(() => {
    user.click(button);
  });
  await waitFor(() => {
    expect(iconElement).toHaveClass('fa-volume-high');
  });
});
