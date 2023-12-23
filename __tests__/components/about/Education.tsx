import { render, screen } from "@testing-library/react";
import Education from "@components/about/Education";
import { EducationData } from "@components/about/types";
import '@testing-library/jest-dom';

const mockEducation: EducationData = {
  name: 'School Name',
  location: 'School Location',
  degree: 'Masters in Mocking',
};

describe('Components > Education', () => {
  beforeEach(() => {
    render(<Education education={mockEducation} />);
  });

  it('Renders the education title', () => {
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('Renders the school name', () => {
    const school = screen.getByText(mockEducation.name);

    expect(school).toBeInTheDocument();
  });
  
  it('Renders the school location', () => {
    const location = screen.getByText(new RegExp(mockEducation.location));

    expect(location).toBeInTheDocument();
  });

  it('Renders the education degree', () => {
    const degree = screen.getByText(mockEducation.degree);

    expect(degree).toBeInTheDocument();
  });
});
