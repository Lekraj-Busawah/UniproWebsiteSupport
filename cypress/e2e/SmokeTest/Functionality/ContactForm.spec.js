Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Contact Form', () => {
    it('Test the contact form', () => {
      cy.visit('https://www.unipro.io/contact/');

      //click on submit without entering any value
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[14]/button').should('be.visible').click()

      //verify validation messages are displayed
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[1]/div[2]').should('be.visible')
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[2]/div[2]').should('be.visible')
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[6]/div').should('be.visible')
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[9]/div/div[2]').should('be.visible')
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[10]/div/div[2]').should('be.visible')
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[11]/div/div[2]').should('be.visible')

      //type name
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[1]/div[1]/input').should('be.visible').type('MAU testing name')

      //type email
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[2]/div[1]/input').should('be.visible').type('mau-email@unipro.io')

      //type phone
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[3]/div/input').should('be.visible').type('0123456789')

     //type company 
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[4]/div/input').should('be.visible').type('Mau Testing Company')

     //type website
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[5]/div/input').should('be.visible').type('www.mau-testing.com')

     //type message
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[6]/textarea').should('be.visible').type('hello this is for testing purposes from the MAU team')

     //select first radio button
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[9]/div/div[1]/label').should('be.visible').click()


     //select second radio button
     cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[10]/div/div[1]/label').should('be.visible').click()


    //select third radio button
    cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[11]/div/div[1]/label').should('be.visible').click()


      //click on submit
      cy.xpath('/html/body/div[1]/div[1]/div/div/main/article/section[1]/div/div/div[1]/section/form/div[14]/button').should('be.visible').click()

      cy.wait(5000);

     //verify that a Thank you message appears on successful submission
      cy.get('h2').contains('Thank You!')

     cy.screenshot('thank you')

    })

});