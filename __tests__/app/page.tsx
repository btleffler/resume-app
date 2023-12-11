import { render, screen } from "@testing-library/react";
import MainPage from '@app/page';
import '@testing-library/jest-dom';
import { lstat, readdir } from "fs/promises";
import path from "path";

const directories:Array<string> = [];
const appPath = path.resolve('src', 'app');

beforeAll(async () => {
  const files = await readdir(appPath);

  return Promise.all(
    files.map(async (dir) => {
      try {
        const filePath = path.join(appPath, dir);
        const pagePage = path.join(filePath, 'page.tsx');
        const fileStats = await lstat(filePath);
        const pageStats = await lstat(pagePage);

        if (fileStats.isDirectory() && pageStats.isFile()) {
          directories.push(dir);
        }
      } catch (error) {
        // File doesn't exist
      }
    })
  );
});

describe('Pages > Main', () => {
  it('Renders a link for each directory', () => {
    render(<MainPage />);

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(directories.length);
    
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(directories).toContain(link.getAttribute('href'));
    });
  });
});
