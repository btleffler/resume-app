import { render, screen } from "@testing-library/react";
import ResumeSection from '@components/about/ResumeSection';
import '@testing-library/jest-dom';

describe('Components > ResumeSection', () => {
  it('Renders the title of the section', () => {
    render(<ResumeSection title="title"></ResumeSection>);

    const title = screen.getByText('title');

    expect(title).toBeInTheDocument();
  });

  it('Renders any children passed', () => {
    render(<ResumeSection title="title">
      <div role="article">
        <p>This is the section of the resume.</p>
      </div>
    </ResumeSection>);

    const content = screen.getByRole('article');

    expect(content).toBeInTheDocument();
  });
});
