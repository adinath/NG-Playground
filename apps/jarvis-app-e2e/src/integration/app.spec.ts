import { getGreeting } from '../support/app.po';

describe('jarvis-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to jarvis-app!');
  });
});
