describe('Reservations Cafe', () => {


beforeEach(() => {
    cy.visit("http://localhost:3000")
})

it('Should render cafe title', () => {
    cy.get('[data-cy="app-title"]').contains("Turing Cafe Reservations")
})

it('Should render reservation form', () => {
    cy.get('[data-cy="res-form"]').should('be.visible')
})

it('Should render a functional name field', () => {
    cy.get('[data-cy="input-name"]').invoke('attr', 'placeholder').should('contain', 'Name')
    cy.get('[data-cy="input-name"]').type('Travis')
    cy.get('[data-cy="input-name"]').should('have.value', 'Travis')
})

it('Should render a functional date field', () => {
    cy.get('[data-cy="input-date"]').invoke('attr', 'placeholder').should('contain', 'Date')
    cy.get('[data-cy="input-date"]').type('01/09')
    cy.get('[data-cy="input-date"]').should('have.value', '01/09')
})

it('Should render a functional time field', () => {
    cy.get('[data-cy="input-time"]').invoke('attr', 'placeholder').should('contain', 'Time')
    cy.get('[data-cy="input-time"]').type('4:00')
    cy.get('[data-cy="input-time"]').should('have.value', '4:00')
})

it('Should render a functional number field', () => {
    cy.get('[data-cy="input-number"]').invoke('attr', 'placeholder').should('contain', 'Number of guests')
    cy.get('[data-cy="input-number"]').type(9)
    cy.get('[data-cy="input-number"]').should('have.value', 9)
})

it('Should render make reserveration button', () => {
    cy.get('[data-cy="submit-button"]').should('be.visible')
})

it('Should render current reservations (with/o POST)', () => {
    cy.get('[data-cy="reservation"]').should('have.length', 10)
})

it('Should render a reservations details', () => {
    cy.get('[data-cy="res-name"]').contains('Pam')
    cy.get('[data-cy="res-date"]').contains('1/21')
    cy.get('[data-cy="res-time"]').contains('6:00')
    cy.get('[data-cy="res-number"]').contains(4)
})

it('Should render a new reservation after completing form', () => {
    cy.get('[data-cy="input-name"]').type('Travis')
    cy.get('[data-cy="input-date"]').type('07/20')
    cy.get('[data-cy="input-time"]').type('8:00')
    cy.get('[data-cy="input-number"]').type(30)
    cy.get('[data-cy="submit-button"]').click()

    cy.get('[data-cy="res-name"]').contains('Travis')
    cy.get('[data-cy="res-date"]').contains('07/20')
    cy.get('[data-cy="res-time"]').contains('8:00')
    cy.get('[data-cy="res-number"]').contains(30)
})

})