Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

//https://www.unipro.io/
it('load Home page',() => {
    cy.visit('https://www.unipro.io/', {timeout: 40000});
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
})
 
//https://www.unipro.io/services
it('load services page',() => {
  cy.visit('https://www.unipro.io/services', {timeout: 40000});
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
})


//https://www.unipro.io/how-we-work
it('load how-we-work page',() => {
  cy.visit('https://www.unipro.io/how-we-work', {timeout: 40000});
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
})


//https://www.unipro.io/our-work
it('load our-work page',() => {
  cy.visit('https://www.unipro.io/our-work', {timeout: 40000});
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
})


//https://insight.unipro.io/
it('load insights page',() => {
  cy.visit('https://insight.unipro.io/', {timeout: 40000});
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
})


//https://www.unipro.io/about
it('load about page',() => {
  cy.visit('https://www.unipro.io/about', {timeout: 40000});
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
})


//https://www.unipro.io/contact/
it('load contact page',() => {
  cy.visit('https://www.unipro.io/contact/', {timeout: 40000});
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
})
