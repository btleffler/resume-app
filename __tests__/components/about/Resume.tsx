import { render, screen } from "@testing-library/react";
import Resume from "@components/about/Resume";
import resume from "@app/about/resume-data";
import '@testing-library/jest-dom';

describe('Components > Resume', () => {
  beforeEach(() => {
    render(<Resume resume={resume} />);
  });

  it.each([
    'Contact',
    'Experience',
    'Education',
    'Skills',
  ])('Renders %s section', (section) => {
    expect(screen.getByText(section)).toBeInTheDocument();
  });

  it('Renders the document', () => {
    expect(screen.getByRole('document')).toBeInTheDocument();
  });
});
