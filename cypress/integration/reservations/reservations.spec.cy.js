describe('Reservations Cafe', () => {


beforeEach(() => {
    cy.visit("http://localhost:3000")
})

it('Should render cafe title', () => {
    cy.get('[data-cy="app-title"]').contains("Turing Cafe Reservations")
})

it('Should render reservation form', () => {
    cy.get('[data-cy="res-form"]').contains('Name','Date','Time','Number')
})

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })

// it('Should render ', () => {
    
// })


})