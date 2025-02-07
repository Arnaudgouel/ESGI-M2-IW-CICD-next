import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hello from '../src/app/hello/page';

describe('Hello', () => {
  it('renders a heading with "Hello, World!"', () => {
    render(<Hello />);
    // Recherche un élément <h1> contenant exactement "Hello, World!"
    const heading = screen.getByTestId('h1');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Hello, World!");
  });
});