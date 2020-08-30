import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

const mockClickFunction = jest.fn();
const defaultProps = {
  clickFunc: mockClickFunction,
  text: 'Submit'
};

test('Button renders and matches snapshot...', () => {
  const container = render(<Button {...defaultProps} />);
  expect(container).toMatchSnapshot();
});

test('Button Has Correct Text', () => {
  const { getByText } = render(<Button {...defaultProps} />);
  const buttonText = getByText(/submit/i);
  expect(buttonText).toBeInTheDocument();
});

test('Button is clicked...', () => {
  const { getByRole } = render(<Button {...defaultProps} />);
  fireEvent.click(getByRole('button'));
  expect(mockClickFunction).toHaveBeenCalledTimes(1);
});
