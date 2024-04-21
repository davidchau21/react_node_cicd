import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const h1Element = screen.getByText(/My Website/i);
  expect(h1Element).toBeInTheDocument();

  const h3Element = screen.getByText(/Welcome to HCM/i);
  expect(h3Element).toBeInTheDocument();
});





