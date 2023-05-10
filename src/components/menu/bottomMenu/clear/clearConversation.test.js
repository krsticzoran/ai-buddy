import { render, screen, fireEvent } from '@testing-library/react';
import ClearConverstation from './ClearConversation';

describe('Clear Conversation', () => {
  test('renders a button with text "Log out"', () => {
    render(<ClearConverstation />);
    const clearConversationButton = screen.getByRole('button', {
      name: /Clear conversations/i,
    });
    expect(clearConversationButton).toBeInTheDocument();
  });
});
