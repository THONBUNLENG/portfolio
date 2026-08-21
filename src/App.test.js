import { render, screen } from '@testing-library/react';
import App from './App';

test('renders splash screen heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/SOFTWARE ENGINEER/i);
  expect(headingElement).toBeInTheDocument();
});
