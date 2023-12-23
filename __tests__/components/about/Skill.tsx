import { render, screen } from "@testing-library/react";
import Skill from "@components/about/Skill";
import '@testing-library/jest-dom';

describe('Components > Skill', () => {
  it('Renders the skill passed', () => {
    const mockSkill = 'skill';

    render(<Skill skill={mockSkill} />);

    expect(screen.getByText(mockSkill)).toBeInTheDocument();
  });
});
