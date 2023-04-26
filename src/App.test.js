import { render, screen } from '@testing-library/react';

import Title from './components/Title';

test('renders chrimle title', () => {
  render(<Title />);
  const linkElement = screen.getByText(/Chrimle/i);
  expect(linkElement).toBeInTheDocument();
});
