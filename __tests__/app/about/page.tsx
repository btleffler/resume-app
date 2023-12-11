import { render, screen } from "@testing-library/react";
import AboutPage from '@app/about/page';
import '@testing-library/jest-dom';

describe('Pages > About', () => {
  it('Renders Resume', () => {
    render(<AboutPage />);
    
    const renderedResume = screen.getByRole('document');

    expect(renderedResume).toBeInTheDocument();
  });
});
