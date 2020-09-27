
beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

describe('User can visit the contracts list page', () => {
  it('and see a list of contracts', () => {
    cy.get(':nth-child(1) > a').should('be.visible').click()
    cy.get('#root').children().contains('Contracts:').should('not.contain', 'Customers:')
    cy.get('#root').children().contains('Nights watch hiring contract').should('not.contain', 'Jon Snow')
  })
})

describe('User can visit the customers list page', () => {
  it('see a list of customers and their contracts', () => {
    cy.get(':nth-child(2) > a').should('be.visible').click()
    cy.get('#root').children().contains('Customers:').should('not.contain', 'Contracts:')
  })

  it('and delete a chosen customer and relative contracts successfully', () => {
    cy.get(':nth-child(2) > a').should('be.visible').click()
    cy.get('#root').children().should('contain', 'Jon Snow')
    cy.get('#root > :nth-child(3)').click()
    cy.get('#root').children().should('not.contain', 'Jon Snow')
    cy.contains('Warriors hiring contract').should('not.contain', 'Nights watch hiring contract')
    cy.contains('Dragons regulatory contract').should('not.contain', 'Wolfs regulatory contract')
    cy.go('back')
    cy.get(':nth-child(1) > a').should('be.visible').click()
    cy.get('#root').contains('Contracts:').should('not.contain', 'Customers:')
    cy.get('h4').contains('Warriors hiring contract').should('not.contain', 'Nights watch hiring contract')
  })
})

// it('cy.window() - get the global window object', () => {
//   // https://on.cypress.io/window
//   cy.window().should('have.property', 'top')
// })
