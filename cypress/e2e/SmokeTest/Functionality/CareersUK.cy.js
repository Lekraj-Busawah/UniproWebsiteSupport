describe('template spec', () => {
    afterEach(() => {
        cy.get('.iubenda-cs-accept-btn').click()

    })

    it('Careers UK page', () => {
        cy.visit('https://www.unipro.io/careers')

        cy.get('.background-image').should('be.visible')
        cy.get('.text')
            .should('have.text', 'Careers UK')
            .and('be.visible')
        cy.get('.strapline > span')
            .should('have.text', 'Work with us. Realise new possibilities, doing work that matters.')
            .and('be.visible')

        cy.wait(200)
        cy.get('[style="order:-1"] > .content > .ui > h3').should('have.text', 'A great place to work')
        //cy.get(':nth-child(1) > .container > .row > :nth-child(2) > .gatsby-image-wrapper > [data-main-image=""]').should('be.visible')
        cy.get('[style="order:-1"] > .content > .ui > :nth-child(3)').should('be.visible')
        cy.get('.ui > :nth-child(4)').should('be.visible')

        cy.get(':nth-child(2) > .container > .row > .sixteen > .ui > p > img').should('be.visible')

        //let's make an impact together section
        /*cy.get('section[style="color:rgb(0, 0, 0);background-color:rgb(242, 242, 242)"] > .container > .row > .sixteen > .gatsby-image-wrapper > [data-main-image=""]')
        .should('be.visible')*/
        cy.get('.ui > h2 > span').should('be.visible')

        cy.get('.image-left > .container > .row > :nth-child(2) > .gatsby-image-wrapper > [data-main-image=""]').should('be.visible')
        cy.get('[style="order:1"] > .content > .segment > h3').should('be.visible')
        cy.get('[style="order:1"] > .content > .segment > :nth-child(2)').should('be.visible')
        cy.get('[style="order:1"] > .content > .segment > :nth-child(3)').should('be.visible')
        cy.get('.content > .button')
            .and('be.visible')

        //work benefits section 
        cy.get(':nth-child(1) > .left > .header')
            .should('have.text','Focused on Mastery')
            .and('be.visible')
        cy.get(':nth-child(1) > .left > .segment').should('be.visible')
        cy.get(':nth-child(2) > .left > .header')
            .should('have.text','Pension Scheme')
            .and('be.visible')
        cy.get(':nth-child(2) > .left > .segment')
        cy.get(':nth-child(3) > .left > .header')
            .should('have.text','Private Health Care')
            .and('be.visible')
        cy.get(':nth-child(3) > .left > .segment').should('be.visible')
        cy.get(':nth-child(4) > .left > .header')
            .should('have.text','Remote, but Together')
            .and('be.visible')
        cy.get(':nth-child(4) > .left > .segment').should('be.visible')
        cy.get(':nth-child(5) > .left > .header')
            .should('have.text','Birthday Day Off')
            .and('be.visible')
        cy.get(':nth-child(5) > .left > .segment').should('be.visible')
        cy.get(':nth-child(6) > .left > .header')
            .should('have.text','Recognition')
            .and('be.visible')
        cy.get(':nth-child(6) > .left > .segment').should('be.visible')
        cy.get(':nth-child(7) > .left > .header')
            .should('have.text','Employee Perks')
            .and('be.visible')
        cy.get(':nth-child(7) > .left > .segment').should('be.visible')
        cy.get(':nth-child(8) > .left > .header')
            .should('have.text','Regular Socials')
            .and('be.visible')
        cy.get(':nth-child(8) > .left > .segment').should('be.visible')

        cy.get(':nth-child(6) > .container > .row > .sixteen > .ui > p > img').should('be.visible')

        //lets work together section
        cy.get('.cta-large > .container').should('be.visible')
        cy.get('.column > .center > .ui').should('be.visible')
        cy.get('.center > .segment > .ui').should('be.visible')

    })
})