import { render, screen } from "@testing-library/react";
import Contact from "@components/about/Contact";
import { ContactData } from "@src/components/about/types";
import '@testing-library/jest-dom';

const mockContact: ContactData = {
  'email': 'email@domain.com',
  'name': 'John Doe',
  'phone': '1234567890',
};

describe('Components > Contact', () => {
  beforeEach(() => {
    render(<Contact contact={mockContact} />);
  });

  it('Renders the contact title', () => {
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('Renders the email link', () => {
    const email = screen.getByText(mockContact.email);

    expect(email).toBeInTheDocument();
    expect(email.getAttribute('href')).toBe(`mailto:${mockContact.email}`);
  });
  
  it('Renders the phone link', () => {
    const phone = screen.getByText(mockContact.phone);

    expect(phone).toBeInTheDocument();
    expect(phone.getAttribute('href')).toBe(`tel:${mockContact.phone}`);
  });

  it('Renders the contact name', () => {
    const name = screen.getByRole('heading');

    expect(name).toBeInTheDocument();
  });
});
