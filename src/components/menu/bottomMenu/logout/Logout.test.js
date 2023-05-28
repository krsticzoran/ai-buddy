import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import user from '@testing-library/user-event';
import Logout from './Logout';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
});

test('renders logout button', () => {
  const mock = jest.fn();
  render(
    <Provider store={store}>
      <Logout onClick={mock} />
    </Provider>
  );
  const logoutButton = screen.getByText(/Log out/i);

  expect(logoutButton).toBeInTheDocument();
});
