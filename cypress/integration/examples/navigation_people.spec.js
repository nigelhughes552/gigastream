describe('Test Navigation', function() {
  it('Visits the pages', function() {
    cy.ntlm('https://localhost', 'ascpc157_admin', 'Ser4.pHim', 'ASCPC157');
    cy.visit('https://localhost');

    // People
    cy.get('a [title="People"]').click();
    cy.contains('#PersonTable');
  });
});
