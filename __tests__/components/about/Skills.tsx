import { render, screen } from "@testing-library/react";
import Skills from "@components/about/Skills";
import '@testing-library/jest-dom';

const mockSkills = ['skill one', 'skill two'];

describe('Components > Skills', () => {
  beforeEach(() => {
    render(<Skills skills={mockSkills} />);
  });

  it('Renders the skills title', () => {
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('Renders each skill', () => {
    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
