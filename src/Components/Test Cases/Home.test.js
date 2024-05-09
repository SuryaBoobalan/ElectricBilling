import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {
  it('renders two h1 elements with text "TANGEDCO" and "TANGEDCO WELCOMES YOU"', () => {
    const { getAllByRole } = render(<Home />);
    const h1Elements = getAllByRole('heading');
    expect(h1Elements).toHaveLength(2);
    expect(h1Elements[0]).toHaveTextContent('TANGEDCO');
    expect(h1Elements[1]).toHaveTextContent('TANGEDCO WELCOMES YOU');
  });

  it('renders a paragraph with text "TAMILNADU GENERATION AND DISTRIBUTION CORPORATION LIMITED"', () => {
    const { getByText } = render(<Home />);
    expect(getByText('TAMILNADU GENERATION AND DISTRIBUTION CORPORATION LIMITED')).toBeInTheDocument();
  });

  it('renders two links with correct text and routes', () => {
    const { getAllByRole } = render(<Home />);
    const links = getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('Calculate Bill');
    expect(links[0]).toHaveAttribute('href', '/Calculator');
    expect(links[1]).toHaveTextContent('Login');
    expect(links[1]).toHaveAttribute('href', '/User');
  });

  it('calls navigate function when link is clicked', () => {
    const { getAllByRole } = render(<Home />);
    const links = getAllByRole('link');
    const navigate = jest.fn();
    // Mock the navigate function
    jest.mock('react-router-dom', () => ({
      useNavigate: () => navigate,
    }));
    fireEvent.click(links[0]);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/Calculator');
  });
});