describe('Test Navigation', function() {
  it('Visits the Assets pages', function() {
    cy.ntlm('https://localhost', 'ascpc157_admin', 'Ser4.pHim', 'ASCPC157');
    cy.visit('https://localhost');

    // People
    cy.get('a [title="Assets"]').click();
    cy.get('#assetList');

    cy.get('#assetListTable #1').click();
  });
});
