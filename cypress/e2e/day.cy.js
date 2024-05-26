describe('Should have all days in the week', () => {
  it('passes', () => {
    cy.visit('http://localhost:7123/')
  })

  it('should show days', () => {
	cy.visit('http://localhost:7123/')

	cy.contains('Måndag').should('be.visible');
	cy.contains('Tisdag').should('be.visible');
	cy.contains('Fredag').should('be.visible');
  })
})