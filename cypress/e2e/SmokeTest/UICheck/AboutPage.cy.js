describe('template spec', () => {
    afterEach(() => {
        cy.get('.iubenda-cs-accept-btn').click()

    })

    it('About page', () => {
        cy.visit('https://www.unipro.io/about')
        /*cy.window()
            .its('performance')
            .invoke('measure', 'modalOpen')
            .its('duration', { timeout: 0 }) //set timeout to 0
            .should('be.lessThan', 7000) //load longer than 5 seconds */

        //check banner image and text
        cy.get('.background-image').should('be.visible')
        cy.get('.content > .text')
            .should('have.text', 'About us')
            .and('be.visible')
        cy.get('.strapline > span').should('be.visible')

        cy.get('.content > .ui > h3').should('be.visible')
        cy.get('.content > .ui > p').should('be.visible')
        cy.get(':nth-child(2) > .gatsby-image-wrapper > [data-gatsby-image-ssr=""]').should('be.visible')

        //vc image
        cy.get('p > img').should('be.visible')

        //core values
        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(1) > .left > .header')
            .should('have.text', 'Core values')
        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(1) > .left > .segment')
            .should('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(2) > .left > .header')
            .should('have.text', 'Authentic')
        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(2) > .left > .segment')
            .should('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(3) > .left > .header')
            .should('have.text', 'Enthusiastic')
        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(3) > .left > .segment')
            .should('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(4) > .left > .header')
            .should('have.text', 'Team player')
        cy.get('[style="padding:3em 0;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255)"] > .container > .row > :nth-child(4) > .left > .segment')
            .should('be.visible')

        cy.get(':nth-child(5) > .left > .header')
            .should('have.text', 'Brave')
        cy.get(':nth-child(5) > .left > .segment')
            .should('be.visible')

        cy.get(':nth-child(6) > .left > .header')
            .should('have.text', 'Make it happen')
        cy.get(':nth-child(6) > .left > .segment')
            .should('be.visible')

        cy.get('.ui > .gatsby-image-wrapper > [data-gatsby-image-ssr=""]').should('be.visible')

        cy.get('.testimonial > .segments').should('be.visible')
        cy.get('.testimonial > .text')
            .should('have.text', 'The Unipro team are incredibly friendly and easy to work with. Their sheer breadth and depth of knowledge when it comes to planning and executing our digital project within Low-Code has been invaluable to Arena Systems. ')
            .and('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(1) > .left > .header')
            .should('have.text', 'We are trusted')
        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(1) > .left > .segment')
            .should('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(2) > .left > .header')
            .should('have.text', 'Technology is our passion')
        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(2) > .left > .segment')
            .should('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(3) > .left > .header')
            .should('have.text', 'We care about our clients')
        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(3) > .left > .segment')
            .should('be.visible')

        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(4) > .left > .header')
            .should('have.text', 'We care about our people')
        cy.get('[style="padding:3em 0;color:rgb(255, 255, 255);background-color:rgb(39, 39, 39)"] > .container > .row > :nth-child(4) > .left > .header')
            .should('be.visible')

        cy.get('.cta-large > .container').should('be.visible')
    })
})