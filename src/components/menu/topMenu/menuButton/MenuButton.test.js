import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
import MenuButton from './MenuButton';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { menuActions } from '../../../../store/menu';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
  menu: { isMenuOpen: false },
});

test('menu button is rendered', async () => {
  const dispatchMock = jest.spyOn(store, 'dispatch');

  render(
    <Provider store={store}>
      <MenuButton />
    </Provider>
  );

  const menuButton = screen.getByRole('button');
  expect(menuButton.firstChild).toHaveClass('fa-bars');

  fireEvent.click(menuButton);

  await waitFor(() => {
    expect(dispatchMock).toHaveBeenCalledWith(menuActions.toggleMenu());
    setTimeout(() => {
      expect(menuButton.firstChild).toHaveClass('fa-xmark');
    }, 100);
  });

  fireEvent.click(menuButton);

  await waitFor(() => {
    expect(dispatchMock).toHaveBeenCalledWith(menuActions.toggleMenu());
    setTimeout(() => {
      expect(menuButton.firstChild).toHaveClass('fa-bars');
    }, 100);
  });
});
