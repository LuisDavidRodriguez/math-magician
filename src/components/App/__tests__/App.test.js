import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to our page/i);
  expect(linkElement).toBeInTheDocument();
});
