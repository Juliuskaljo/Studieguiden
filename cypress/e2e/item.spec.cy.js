describe('Item component', () => {
	it('should edit todo item', () => {
	  cy.visit('http://localhost:7123'); 
  
	  cy.get('.item')
		.first()
		.find('[title="Ändra"]')
		.click();
  
	  cy.get('input[type="text"]')
		.clear()
		.type('Uppdaterad uppgiftstext');
  
	  cy.get('body').click();
  
	  cy.contains('Uppdaterad uppgiftstext').should('exist');
	});
  
	it('should remove todo item', () => {
	  cy.visit('http://localhost:7123');
  
	  cy.get('.item')
		.first()
		.find('[data-cy="remove"]')
		.should('be.visible')
		.click();
 
	  cy.get('[data-cy="remove"]')
		.first()
		.find('[data-cy="remove"]')
		.should('not.exist');
	});
  });