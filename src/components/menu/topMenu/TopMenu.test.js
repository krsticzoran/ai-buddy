import { screen, render, waitFor } from '@testing-library/react';
import TopMenu from './TopMenu';
import { Provider } from 'react-redux';
import { authActions } from '../../../store/auth';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({
  auth: { uid: 'user123' },
  newChat: { isNewChat: false },
  menu: { isMenuOpen: false },
});
describe('renders username', () => {
  test('renders username ', async () => {
    render(
      <Provider store={store}>
        <TopMenu />
      </Provider>
    );

    await waitFor(() => {
      setTimeout(() => {
        // Verify that the username is rendered
        const button = screen.getByRole('button', { name: 'user123' });
        expect(button).toBeInTheDocument();
      }, 100);
    });
  });
});
