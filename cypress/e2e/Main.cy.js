describe('Main Component E2E Test', () => {
	beforeEach(() => {

	  cy.visit('http://localhost:7123/');
	});
  
	it('renders the Main component with all essential elements', () => {

	  cy.get('h1').should('be.visible')

	  cy.get('main').should('be.visible');
  
	  cy.get('.day-view').should('be.visible');
  
	  cy.get('.day').should('have.length.at.least', 1);
  
	  cy.get('.prio-list').should('be.visible');
  
	  cy.get('.prio-list input[type="search"]').should('be.visible');
  
	});
  });