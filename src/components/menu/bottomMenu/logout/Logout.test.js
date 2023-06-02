import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ChatContext } from '../../../../store/chat-context';

import Logout from './Logout';
import { authActions } from '../../../../store/auth';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
});

// Mock the ChatContext
const chatCtx = {
  chatHandler: jest.fn(),
};

test('renders logout button and triggers necessary actions on click', async () => {
  const dispatchMock = jest.spyOn(store, 'dispatch');

  render(
    <Provider store={store}>
      <ChatContext.Provider value={chatCtx}>
        <Logout />
      </ChatContext.Provider>
    </Provider>
  );

  const logoutButton = screen.getByText(/Log out/i);

  expect(logoutButton).toBeInTheDocument();

  fireEvent.click(logoutButton);

  await waitFor(() => {
    expect(chatCtx.chatHandler).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(authActions.logout());
    setTimeout(() => {
      expect(logoutButton).not.toBeInTheDocument();
    }, 100);
  });

  // Restore the original implementation of the dispatch function
  dispatchMock.mockRestore();
});
