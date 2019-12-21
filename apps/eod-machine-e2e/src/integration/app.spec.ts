import { getGreeting } from '../support/app.po';

describe('eod-machine', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to eod-machine!');
  });
});
