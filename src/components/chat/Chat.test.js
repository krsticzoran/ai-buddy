import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Chat from './Chat';
import { OpenAIApi, openai } from 'openai';

// Mock the store
const mockStore = configureStore([]);
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
});

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

test('renders Chat component correctly', async () => {
  render(
    <Provider store={store}>
      <Chat />
    </Provider>
  );
});
