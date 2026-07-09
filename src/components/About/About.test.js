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

// Mock useLanguage hook
jest.mock("../../context/LanguageContext", () => ({
  useLanguage: jest.fn(() => ({
    t: (key) => {
      const translations = {
        aboutTitlePrefix: "Know Who",
        aboutTitleHighlight: "I'M",
        aboutTitleSuffix: "...!",
        professionalSkills: "Professional Skillset",
        toolsTitle: "Tools I use",
      };
      return translations[key] || key;
    },
    language: "en",
  })),
}));

// Mock image import
jest.mock("../../Assets/me2.jpg", () => "laptop-img-mock.jpg");

function renderAbout() {
  return render(<About />);
}

describe('About Component', () => {
  test('renders the main heading with translated text', () => {
    renderAbout();
    expect(screen.getByText(/Know Who/)).toBeInTheDocument();
    expect(screen.getByText("I'M")).toBeInTheDocument();
    expect(screen.getByText("...!")).toBeInTheDocument();
  });

  test('renders the Particle component mock', () => {
    renderAbout();
    expect(screen.getByTestId('particle-mock')).toBeInTheDocument();
  });

  test('renders the Aboutcard component mock', () => {
    renderAbout();
    expect(screen.getByTestId('aboutcard-mock')).toBeInTheDocument();
  });

  test('renders the about image', () => {
    renderAbout();
    const image = screen.getByAltText('about');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'laptop-img-mock.jpg');
  });

  test('renders the "Professional Skillset" heading', () => {
    renderAbout();
    // The component splits the string and renders it.
    // We check for parts of it.
    expect(screen.getByText(/Professional/)).toBeInTheDocument();
    expect(screen.getByText(/Skillset/)).toBeInTheDocument();
  });

  test('renders the Techstack component mock', () => {
    renderAbout();
    expect(screen.getByTestId('techstack-mock')).toBeInTheDocument();
  });

  test('renders the "Tools I use" heading', () => {
    renderAbout();
    expect(screen.getByText(/Tools/)).toBeInTheDocument();
    expect(screen.getByText(/I use/)).toBeInTheDocument();
  });

  test('renders the Toolstack component mock', () => {
    renderAbout();
    expect(screen.getByTestId('toolstack-mock')).toBeInTheDocument();
  });

  test('renders the Github component mock', () => {
    renderAbout();
    expect(screen.getByTestId('github-mock')).toBeInTheDocument();
  });
});