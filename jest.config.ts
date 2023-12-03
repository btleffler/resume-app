import nextJest from 'next/jest.js';
 
const createJestConfig = nextJest({
  dir: './',
});
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig({
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 
  testEnvironment: 'jest-environment-jsdom',
});
