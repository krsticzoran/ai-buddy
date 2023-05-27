import { screen, render } from '@testing-library/react';
import ChatCard from './ChatCard';

test('renders messages correctly', () => {
  const messages = ['Message 1', 'Message 2', 'Message 3'];
  render(<ChatCard messages={messages} />);

  const messageElements = screen.getAllByTestId('chat-message');

  expect(messageElements).toHaveLength(messages.length);
  messages.forEach((message, index) => {
    if (index % 2 === 0) {
      expect(messageElements[index]).toHaveClass('chat-card-color');
    } else {
      expect(messageElements[index]).toHaveClass('chat-card-color-dark');
    }
    expect(messageElements[index]).toHaveTextContent(message);
  });
});
