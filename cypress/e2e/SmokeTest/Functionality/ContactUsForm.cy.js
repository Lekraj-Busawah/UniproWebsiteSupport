/// <reference types ="cypress"/>
it('UniProWeb navigate to contact us page', () => {
    //display browser properties(version) in console log
    console.log(Cypress.browser)

    cy.visit('https://www.unipro.io/contact/')

    // accept cookie
    cy.get('.iubenda-cs-accept-btn').click()

    // verify header and sub header
    cy.get('.text').should('have.text', 'Drop us a note')
    cy.get('.strapline > span').should('have.text','Engage with our team')

    // verify map present
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]')

    // verify addres
    //cy.get('address > .ui').should('have.text', 'Chichester')
    cy.get('.segments > .address > address').should('have.text','ChichesterIlex Place,Friary Lane,PO19 1UF')
    //.and('have.text','Ilex Place,')
    //.and('have.text','Friary Lane,')
    //.and('have.text','PO191UF')
    cy.get('.address > a').should('have.text','+44 (0)1243 539412')

    //form section
    //Click on submit without entering data
    cy.get(':nth-child(16) > .ui').click()

    //Check error message
    cy.get(':nth-child(2) > .pointing').should('be.visible')
    cy.get(':nth-child(3) > .pointing').should('be.visible')
    cy.get(':nth-child(7) > .ui').should('be.visible')
    cy.get(':nth-child(9) > .error > .pointing').should('be.visible')
    cy.get(':nth-child(10) > .error > .pointing').should('be.visible')
    cy.get(':nth-child(1) > .error > .pointing').should('be.visible')

    //check validaion message
    cy.get(':nth-child(2) > .ui > input').type('Test*')
    cy.get('.pointing')
        .should('have.text','Alphanumeric characters only.')
        .and('be.visible')
    cy.get(':nth-child(2) > .ui > input').clear()

    cy.get(':nth-child(3) > .ui > input').type('johnlive.com')
    cy.get('.pointing')
        .should('have.text','Please enter a valid email address.')
        .and('be.visible')
    cy.get(':nth-child(3) > .ui > input').clear()

    cy.get(':nth-child(4) > .ui > input').type('test12')
    cy.get('.pointing')
        .should('have.text','Please enter a valid number.')
        .and('be.visible')
    cy.get(':nth-child(4) > .ui > input').clear()

    cy.get(':nth-child(5) > .ui > input').type('unipro%/*')
    cy.get('.pointing')
        .should('have.text','Alphanumeric characters only.')
        .and('be.visible')
    cy.get(':nth-child(5) > .ui > input').clear()

    cy.get(':nth-child(6) > .ui > input').type('test web /*')
    cy.get('.pointing')
        .should('have.text','Alphanumeric characters only.')
        .and('be.visible')
    cy.get(':nth-child(6) > .ui > input').clear()

    cy.get(':nth-child(7) > textarea').type('Hello world/*£')
    cy.get('.pointing')
        .should('have.text','Alphanumeric characters only.')
        .and('be.visible')
    cy.get(':nth-child(7) > textarea').clear()

    // input name
    cy.get(':nth-child(2) > .ui > input').type('John Doe')

    // input email
    cy.get(':nth-child(3) > .ui > input').type('John@live.com')

    // input phone num
    cy.get(':nth-child(4) > .ui > input').type('570598521')

    // input company 
    cy.get(':nth-child(5) > .ui > input').type('unipro')

    // input website
    cy.get(':nth-child(6) > .ui > input').type('unipro webb')

    // input message
    cy.get(':nth-child(7) > textarea').type('Hello world')

    // verify text
    cy.get('.form > :nth-child(8)').should('have.text', 'Unipro Limited is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:')

    // check label-checkboxes
    cy.contains('label','I agree to receive all marketing communications from Unipro, including weekly communications of content posted to our blog and marketing insights pages.').click()
    cy.contains('label','I agree to receive ongoing product and service information relating to the service I am enquiring about.').click()
    cy.contains('label','I agree to receive communication relating to this enquiry only.').click()
        
    cy.get(':nth-child(16) > .ui')
        .should('be.visible')
})