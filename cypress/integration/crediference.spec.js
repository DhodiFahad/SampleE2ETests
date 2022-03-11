describe('Crediference',()=>{
    beforeEach(()=>{
        cy.visit('https://crediference.com/')
    })

    it('login',()=>{
        cy.get('input[name="email"]').eq(0).type('fake@email.com').wait(500)
        cy.get('input[name="password"]').eq(0).type('fakepassword').wait(500)
        cy.get('button').first().click().wait(1000)

    })

    it('signup with all credentials provided',()=>{
        cy.get('.fw-bold').should('contain.text','Create One').click()
        cy.get('input[name="name"]').type('fakename').wait(500)
        cy.get('input[name="email-account"]').type('fake@email.com').wait(500)
        cy.get('input[name="password"]').eq(1).type('fakepassword').wait(500)
        cy.get('button[type="submit"]').last().click().wait(1000)
    })
    it('signup with no username provided',()=>{
        cy.get('.fw-bold').should('contain.text','Create One').click()
        // cy.get('input[name="name"]').type('fakename').wait(500)
        cy.get('input[name="email-account"]').type('fake@email.com').wait(500)
        cy.get('input[name="password"]').eq(1).type('fakepassword').wait(500)
        cy.get('button[type="submit"]').last().click().wait(1000)
    })

    it('signup with no email provided',()=>{
        cy.get('.fw-bold').should('contain.text','Create One').click()
        cy.get('input[name="name"]').type('fakename').wait(500)
       
        cy.get('input[name="password"]').eq(1).type('fakepassword').wait(500)
        cy.get('button[type="submit"]').last().click().wait(1000)
    })
    it('signup with no password provided',()=>{
        cy.get('.fw-bold').should('contain.text','Create One').click()
        cy.get('input[name="name"]').type('fakename').wait(500)
        cy.get('input[name="email-account"]').type('fake@email.com').wait(500)
        cy.get('button[type="submit"]').last().click().wait(1000)
    })
})