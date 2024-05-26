import Item from "./Item";

describe('Item component', () => {
	it('renders', () => {
	  cy.mount(<Item item={{ id: 1, text: 'Test item', done: false, late: false }} />);
	  cy.get('.item').should('be.visible');
	});
  
	it('shows item text correctly', () => {
	  cy.mount(<Item item={{ id: 1, text: 'Test item', done: false, late: false }} />);
	  cy.contains('Test item').should('be.visible');
	});
  
	it('toggles item when checkbox is clicked', () => {
	  cy.mount(<Item item={{ id: 1, text: 'Test item', done: false, late: false }} />);
	  cy.get('input[type="checkbox"]').click();
	});
  });

  
  
  
  
  
  
  