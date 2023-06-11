import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ChatContext } from '../../../store/chat-context';
import ChatHistory from './MiddleMenu';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
  menu: { isMenuOpen: false },
});

const chatContextValue = {
  isNewTitle: false,
  chats: [],
  addChat: jest.fn(),
  cancelTitle: jest.fn(),
};

const title = {
  chat1: 'Chat 1',
  chat2: 'Chat 2',
  chat3: 'Chat 3',
};

test('renders new chat button', async () => {
  render(
    <Provider store={store}>
      <ChatContext.Provider value={chatContextValue}>
        <ChatHistory title={title} />
      </ChatContext.Provider>
    </Provider>
  );

  await waitFor(() => {
    setTimeout(() => {
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(Object.keys(title).length + 1);
    }, 100);
  });
});
