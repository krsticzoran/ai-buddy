import { render, screen, waitFor } from '@testing-library/react';
import ClearConversation from './ClearConversation';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import user from '@testing-library/user-event';
import { ChatContext } from '../../../../store/chat-context';
import { newChatActions } from '../../../../store/startNewChat';
const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
});

// Mock the ChatContext
const chatCtx = {
  addTitle: jest.fn(),
};

test('renders clear button and triggers necessary actions on click', async () => {
  const dispatchMock = jest.fn();
  const originalDispatch = store.dispatch;
  store.dispatch = dispatchMock;
  render(
    <Provider store={store}>
      <ChatContext.Provider value={chatCtx}>
        <ClearConversation />
      </ChatContext.Provider>
    </Provider>
  );
  const clearButton = screen.getByText(/Clear conversations/i);

  user.click(clearButton);

  await waitFor(() => {
    expect(chatCtx.addTitle).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(newChatActions.start());
  });

  expect(clearButton).toBeInTheDocument();
  // Restore the original dispatch function
  store.dispatch = originalDispatch;
});
