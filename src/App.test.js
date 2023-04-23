import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chrimle title', () => {
  render(<App />);
  const linkElement = screen.getByText(/chrimle/i);
  expect(linkElement).toBeInTheDocument();
});
