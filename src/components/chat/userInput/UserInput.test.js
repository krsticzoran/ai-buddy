import React from 'react';
import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import { MemoizedUserInput } from './UserInput';

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

describe('UserInput component', () => {
  test('renders the input field', () => {
    render(
      <MemoizedUserInput onData={jest.fn()} isLoading={false} answer="" />
    );

    const inputElement = screen.getByRole('textbox');

    // Verify the input field is rendered
    expect(inputElement).toBeInTheDocument();

    // Type input in the field
    user.click(inputElement);
    user.keyboard('Test input');

    // Verify the typed value
    expect(inputElement).toHaveValue('Test input');
  });
});
