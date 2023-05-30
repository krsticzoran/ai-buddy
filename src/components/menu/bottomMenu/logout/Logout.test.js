import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ChatContext } from '../../../../store/chat-context';

import user from '@testing-library/user-event';
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

test('renders logout button', async () => {
  const dispatchMock = jest.fn();
  const originalDispatch = store.dispatch;
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <ChatContext.Provider value={chatCtx}>
        <Logout />
      </ChatContext.Provider>
    </Provider>
  );

  const logoutButton = screen.getByText(/Log out/i);

  user.click(logoutButton);

  await waitFor(() => {
    expect(chatCtx.chatHandler).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(authActions.logout());
  });

  expect(logoutButton).toBeInTheDocument();

  // Restore the original dispatch function
  store.dispatch = originalDispatch;
});
