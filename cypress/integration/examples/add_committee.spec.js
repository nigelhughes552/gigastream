describe('Add new committee', function() {
  it('Visits the Committees Page', function() {
    cy.ntlm('https://localhost', 'ascpc157_admin', 'Ser4.pHim', 'ASCPC157');
    cy.visit('https://localhost');

    cy.get(':nth-child(2) > .btn > h3').click();
    cy.contains('Add New Committee').click();
    cy.get('#DTE_Field_CommitteeName').type('Test Committee'); // Type 'Hello, World' into the 'input'
    cy.get('.DTE_Form_Buttons > .btn-primary').click();

    cy.get('#CommitteeTable td:eq(1)').should('have.text', 'Test Committee');
  });
});
