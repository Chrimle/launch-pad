import { render, screen } from '@testing-library/react';
import NotFound from "../NotFound";

test('renders the NotFound-component', () => {
    render(<NotFound />);
    expect(screen.getByText(/Page Not Found/)).toBeInTheDocument();
    expect(screen.getByText(/Not quite sure how You got here.../)).toBeInTheDocument();
});