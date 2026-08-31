import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';
import { LanguageProvider } from '../../context/LanguageContext';

// Mock child components
jest.mock("./Github", () => () => <div data-testid="github-mock">Github</div>);
jest.mock("./Techstack", () => () => <div data-testid="techstack-mock">Techstack</div>);
jest.mock("./AboutCard", () => () => <div data-testid="aboutcard-mock">Aboutcard</div>);
jest.mock("./Toolstack", () => () => <div data-testid="toolstack-mock">Toolstack</div>);

// Mock image import
jest.mock("../../Assets/home-main.svg", () => "laptop-img-mock.svg");

function renderAbout() {
  return render(
    <LanguageProvider>
      <About />
    </LanguageProvider>
  );
}

describe('About Component Integration Tests', () => {
  test('renders the main section heading correctly with translations', () => {
    renderAbout();
    expect(screen.getByText(/Know Who/i)).toBeInTheDocument();
    expect(screen.getByText("I'M")).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes("...!"))).toBeInTheDocument();
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
    expect(screen.getByText(/Technical/i)).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
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