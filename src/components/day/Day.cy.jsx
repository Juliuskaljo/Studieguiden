import React from 'react'
import Day from './Day'

describe('Day component', () => {
	it('renders', () => {
	  cy.mount(<Day day={[{ id: 1, text: 'Test item 1', done: false, late: false }]} dayIndex={0} />);
	  cy.get('.day').should('be.visible');
	});
  
	it('shows day name correctly', () => {
	  cy.mount(<Day day={[{ id: 1, text: 'Test item 1', done: false, late: false }]} dayIndex={0} />);
	  cy.contains('Måndag').should('be.visible');
	});
  
	it('renders items correctly', () => {
	  cy.mount(<Day day={[{ id: 1, text: 'Test item 1', done: false, late: false }]} dayIndex={0} />);
	  cy.contains('Test item 1').should('be.visible');
	});
	});