import { render, screen } from '@testing-library/react';
import NotFound from "../NotFound";
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

test('renders the NotFound-component', () => {
    const router = createMemoryRouter([{ path: '*', element: <NotFound /> }])
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Page Not Found/)).toBeInTheDocument();
    expect(screen.getByText(/Not quite sure how You got here.../)).toBeInTheDocument();
    expect(screen.getByText(/Redirecting You to the Home-page in \d seconds.../)).toBeInTheDocument();
});