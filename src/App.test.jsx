import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('نمایش متن سلام دنیا', () => {
  render(<App />);
  expect(screen.getByText('سلام دنیا! 👋')).toBeInTheDocument();
});
