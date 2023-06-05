import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NewChat from './NewChat';
import { newChatActions } from './../../../../store/startNewChat.js';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
});

test('renders new chat button', () => {
  render(
    <Provider store={store}>
      <NewChat />
    </Provider>
  );
  const button = screen.getByText(/new chat/i);
  expect(button).toBeInTheDocument();
});
