import { render, screen } from "@testing-library/react";
import Job from "@components/about/Job";
import { JobData } from "@components/about/types";
import '@testing-library/jest-dom';

const mockJob: JobData = {
  name: 'Employer',
  location: 'Somewhere',
  title: 'Job Title',
  start: new Date(),
  duties: ['duty one', 'duty two'],
  contributions: ['contribution one', 'contribution two'],
};

describe('Components > Job', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('Renders the employer name', () => {
    render(<Job job={mockJob} />);

    const employer = screen.getByText(mockJob.name);

    expect(employer).toBeInTheDocument();
  });

  it('Renders the job location', () => {
    render(<Job job={mockJob} />);
    
    const location = screen.getByText(new RegExp(mockJob.location));

    expect(location).toBeInTheDocument();
  });

  it('Renders the job title', () => {
    render(<Job job={mockJob} />);
    
    const title = screen.getByText(mockJob.title);

    expect(title).toBeInTheDocument();
  });

  it('Renders each duty', () => {
    render(<Job job={mockJob} />);
    
    mockJob.duties.forEach((duty) => {
      expect(screen.getByText(duty)).toBeInTheDocument();
    });
  });

  it('Renders each contribution', () => {
    render(<Job job={mockJob} />);
    
    mockJob.contributions.forEach((contribution) => {
      expect(screen.getByText(contribution)).toBeInTheDocument();
    });
  });

  it('Renders to present if no end date', () => {
    const toLocaleDateString = jest.spyOn(mockJob.start, 'toLocaleDateString');

    render(<Job job={mockJob} />);
    
    const noEndDate = screen.getByText(/present/i);

    expect(noEndDate).toBeInTheDocument();
    expect(toLocaleDateString).toHaveBeenCalledTimes(1);
  });

  it('Renders the start and end date if the end date is present', () => {
    const { start } = mockJob;
    const end = new Date(start);
    
    end.setFullYear(start.getFullYear() + 20);

    const startToLocale = jest.spyOn(start, 'toLocaleDateString');
    const endToLocale = jest.spyOn(end, 'toLocaleDateString');
    const mockJobWithEndDate: JobData = {
      ...mockJob,
      end,
    };

    render(<Job job={mockJobWithEndDate} />);

    const dates = screen.getByText(new RegExp(`${start.getFullYear()}.{1,}${end.getFullYear()}`));

    expect(dates).toBeInTheDocument();
    expect(startToLocale).toHaveBeenCalledTimes(1);
    expect(endToLocale).toHaveBeenCalledTimes(1);
  });
});
