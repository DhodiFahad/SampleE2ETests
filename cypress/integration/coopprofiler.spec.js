describe('Coop Profiler',()=>{
    before(()=>{
        cy.visit('https://coopprofiler.trailanalytics.com/login')
    })

    it('login',()=>{
        cy.get('input[name="email"]').eq(0).type('fake@email.com').wait(500)
        cy.get('input[name="password"]').eq(0).type('fakepassword').wait(500)
        cy.get('button[type="submit"]').click().wait(1000)

    })

    it('signup',()=>{
        cy.get('#info-view').find('button').should('contain.text','SIGN UP').click().wait(500)
        cy.get('input[name="cooperativeName"]').type('fakename').wait(500)
        cy.get('input[name="email"]').eq(1).type('fake@email.com').wait(500)
        cy.get('input[id="contact_phone"]').type('077999999').wait(500)
        cy.get('input[name="password"]').eq(1).type('fakepassword').wait(500)
        cy.get('button[id="register-btn"]').click().wait(1000)
    })
})