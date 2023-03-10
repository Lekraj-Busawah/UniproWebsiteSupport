describe('template spec', () => {
    afterEach(() => {
        cy.get('.iubenda-cs-accept-btn').click()

    })

    it('Careers UK page', () => {
        cy.visit('https://www.unipro.io/careers-mauritius/')

        //banner 
        cy.get('.background-image').should('be.visible')
        cy.get('.text')
            .should('have.text','Careers Mauritius')
            .and('be.visible')
            cy.get('.strapline > span').should('be.visible')

        //team photo1
        cy.get(':nth-child(1) > .container > .row > .sixteen > .ui > p > img').should('be.visible')

        //lets make an impact
        cy.get('.ui > h2 > span').should('be.visible')

        cy.get(':nth-child(2) > .gatsby-image-wrapper > [data-main-image=""]').should('be.visible')
        cy.get('.content > .segment > h3').should('be.visible')
        cy.get('.content > .segment > :nth-child(2)').should('be.visible')
        cy.get('.segment > :nth-child(3)').should('be.visible')
        cy.get('.content > .button')
            .should('be.visible')
            .and('have.attr','href')

        //work benefits
        cy.get(':nth-child(1) > .left > .header')
            .should('have.text','Focused on Mastery')
            .and('be.visible')
        cy.get(':nth-child(1) > .left > .segment').should('be.visible')

        cy.get(':nth-child(2) > .left > .header')
            .should('have.text','Remote, but Together')
            .and('be.visible')
        cy.get(':nth-child(2) > .left > .segment').should('be.visible')

        cy.get(':nth-child(3) > .left > .header')
            .should('have.text','Recognition')
            .and('be.visible')
        cy.get(':nth-child(3) > .left > .segment').should('be.visible')

        cy.get(':nth-child(4) > .left > .header')
            .should('have.text','Regular Socials')
            .and('be.visible')
        cy.get(':nth-child(4) > .left > .segment').should('be.visible')

        cy.get(':nth-child(5) > .left > .header')
            .should('have.text','Private Health Care')
            .and('be.visible')
        cy.get(':nth-child(5) > .left > .segment').should('be.visible')

        //team photo2
        cy.get(':nth-child(5) > .container > .row > .sixteen > .ui > p > img').should('be.visible')

        //lets work together
        cy.get('.cta-large > .container').should('be.visible')
        cy.get('.column > .center > .ui').should('be.visible')
        cy.get('.center > .segment > .ui').click()
        cy.wait(200)
        cy.get('.text').should('be.visible')
        cy.go('back')


    })
})