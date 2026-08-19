import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

// Mock child components
jest.mock("./Github", () => () => <div data-testid="github-mock">Github</div>);
jest.mock("./Techstack", () => () => <div data-testid="techstack-mock">Techstack</div>);
jest.mock("./AboutCard", () => () => <div data-testid="aboutcard-mock">Aboutcard</div>);
jest.mock("./Toolstack", () => () => <div data-testid="toolstack-mock">Toolstack</div>);
jest.mock("../Particle", () => () => <div data-testid="particle-mock">Particle</div>);

// Mock useLanguage hook with comprehensive keys
jest.mock("../../context/LanguageContext", () => ({
  useLanguage: jest.fn(() => ({
    t: (key) => {
      const translations = {
        aboutTitlePrefix: "Know Who",
        aboutTitleHighlight: "I'M",
        aboutTitleSuffix: "...!",
        professionalSkills: "Professional Skillset",
        toolsTitle: "Tools I use",
        aboutCardName: "THON BUNLENG",
        aboutCardCity: "Phnom Penh, Cambodia",
        aboutCardRole: "Software Developer",
        aboutCardEducation: "Computer Science",
        aboutCardUniversity: "BELTEI International University",
        aboutCardActivitiesPrefix: "Outside of coding, I love engaging in activities that keep me creative and inspired",
        "aboutCardActivities.games": "Playing Games",
        "aboutCardActivities.blogs": "Writing Tech Blogs",
        "aboutCardActivities.travel": "Traveling and Exploring New Places",
        aboutCardQuote: '"Strive to build things that make a difference!"',
        aboutCardFooter: "THON BUNLENG",
      };
      return translations[key] || key;
    },
    language: "en",
  })),
}));

// Mock image import
jest.mock("../../Assets/home-main.svg", () => "laptop-img-mock.svg");

function renderAbout() {
  return render(<About />);
}

describe('About Component Integration Tests', () => {
  test('renders the main section heading correctly with translations', () => {
    renderAbout();
    expect(screen.getByText(/Know Who/i)).toBeInTheDocument();
    expect(screen.getByText("I'M")).toBeInTheDocument();
    expect(screen.getByText("...!")).toBeInTheDocument();
  });

  test('renders background Particle visual effects wrapper', () => {
    renderAbout();
    expect(screen.getByTestId('particle-mock')).toBeInTheDocument();
  });

  test('renders the main Aboutcard section component', () => {
    renderAbout();
    expect(screen.getByTestId('aboutcard-mock')).toBeInTheDocument();
  });

  test('renders vector laptop/developer illustration image with correct src and alt attributes', () => {
    renderAbout();
    const image = screen.getByAltText('about');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'laptop-img-mock.svg');
  });

  test('renders the Professional Skillset title elements correctly', () => {
    renderAbout();
    expect(screen.getByText(/Professional/i)).toBeInTheDocument();
    expect(screen.getByText("Skillset")).toBeInTheDocument();
  });

  test('renders Techstack component for skills overview', () => {
    renderAbout();
    expect(screen.getByTestId('techstack-mock')).toBeInTheDocument();
  });

  test('renders the Tools I use heading split elements', () => {
    renderAbout();
    expect(screen.getByText("Tools")).toBeInTheDocument();
    expect(screen.getByText("I use")).toBeInTheDocument();
  });

  test('renders Toolstack component for software tools showcase', () => {
    renderAbout();
    expect(screen.getByTestId('toolstack-mock')).toBeInTheDocument();
  });

  test('renders Github component for commit calendar visualization', () => {
    renderAbout();
    expect(screen.getByTestId('github-mock')).toBeInTheDocument();
  });
});