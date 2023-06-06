import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NewChat from './NewChat';
import { newChatActions } from './../../../../store/startNewChat.js';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
  menu: { isMenuOpen: false },
});

test('renders new chat button', () => {
  const dispatchMock = jest.spyOn(store, 'dispatch');

  render(
    <Provider store={store}>
      <NewChat />
    </Provider>
  );
  const button = screen.getByText(/new chat/i);

  fireEvent.click(button);
  expect(button).toBeInTheDocument();
  expect(dispatchMock).toHaveBeenCalledWith(newChatActions.start());
});
