describe('Ponyracer', () => {
  it('Should display title on home page', () => {
    cy.visit('/')
    cy.contains('h1', 'Ponyracer')
  })
})
