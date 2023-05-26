import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInputContainer from './UserInputContainer';

test('renders children components', () => {
  // Render the UserInputContainer with some mock children components
  render(
    <UserInputContainer>
      <div data-testid="child-component">Child Component 1</div>
      <div data-testid="child-component">Child Component 2</div>
    </UserInputContainer>
  );
  // Check if the child components are rendered
  const childComponents = screen.getAllByTestId('child-component');

  //assertion
  expect(childComponents).toHaveLength(2);
  expect(childComponents[0]).toHaveTextContent('Child Component 1');
  expect(childComponents[1]).toHaveTextContent('Child Component 2');
});
