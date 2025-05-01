// jest.config.ts
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // optional
}

export default createJestConfig(customJestConfig)
