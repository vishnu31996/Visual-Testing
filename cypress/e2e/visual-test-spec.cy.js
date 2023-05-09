describe('Visual Test', () => {

  it('should compare the snapshot of the homepage', () => {
   
    cy.visit('https://www.google.com/');
    cy.wait(500);
    cy.hideHomeElements();  
    cy.matchImageSnapshot('homepage');
  });
});
