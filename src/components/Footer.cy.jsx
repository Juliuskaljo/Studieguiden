import React from 'react';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders', () => {
    cy.mount(<Footer />);
    cy.get('footer').should('be.visible');
  });

  it('displays text', () => {
    cy.mount(<Footer />);
    const today = new Date();
    const formattedDate = today.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'long',
    });
    cy.get('footer').contains(`Idag är det: ${formattedDate}`);
    cy.get('footer').contains('Studieguide | 2024');
  });
});