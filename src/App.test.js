import { render, screen, within } from '@testing-library/react';

import Description from './components/Description';
import SocialLinks from './components/containers/domains/socials/SocialLinks';
import SocialMediaLinks from './components/containers/domains/social-media/SocialMediaLinks';
import Footer from './components/Footer';
import Title from './components/containers/domains/headers/Title';
import SubTitle from './components/containers/domains/headers/SubTitle';

test('renders chrimle title', () => {
  render(<Title />);
  expect(screen.getByText(/Chrimle/i)).toBeInTheDocument();
});

test('renders sub title', () => {
  render(<SubTitle />);
  expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
});

test('renders description', () => {
  render(<Description />);
  expect(screen.getByText(/Welcome/)).toBeInTheDocument();
});

test('renders social links', () => {
  render(<SocialLinks />);
  expect(screen.getByText(/My Socials/)).toBeInTheDocument();
  const socials = screen.getAllByRole('link');
  socials.forEach(social => {
    expect(social).toBeInTheDocument();
    // Check Link
    expect(social).toHaveAttribute('href');
    expect(social.getAttribute('href')).toMatch(/^https.*$/);
    // Check Image
    const image = within(social).getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image.getAttribute('src')).toMatch(/^logo-.*$/);
    // Check Tooltip
    expect(social).toHaveAttribute('title');
    expect(social.getAttribute('title')).toMatch(/^My Profile on .*$/);
  });
  expect(socials.length).toBeGreaterThan(0);
});

test('renders social media links', () => {
  render(<SocialMediaLinks />);
  expect(screen.getByText(/Other/)).toBeInTheDocument();
  expect(screen.getByText(/Verified/)).toBeInTheDocument();
  expect(screen.getByText(/Socials/)).toBeInTheDocument();
  const socialMedias = screen.getAllByRole('link');
  socialMedias.forEach(socialMedia => {
    expect(socialMedia).toBeInTheDocument();
    // Check Link
    expect(socialMedia).toHaveAttribute('href');
    expect(socialMedia.getAttribute('href')).toMatch(/^https.*$/);
    // Check Text
    expect(socialMedia.textContent).toBeTruthy();
    // Check Tooltip
    expect(socialMedia).toHaveAttribute('title');
    expect(socialMedia.getAttribute('title')).toMatch(/^My Profile on .*$/);
  });
  expect(socialMedias.length).toBeGreaterThan(0);
});

test('renders footer', () => {
  render(<Footer />);
  expect(screen.getByText(/Chrimle/)).toBeInTheDocument();
  const github = screen.getByText(/GitHub/);
  expect(github).toBeInTheDocument();
  expect(github).toHaveAttribute('href');
  expect(github.getAttribute('href')).toMatch(/^https.*$/);
})
