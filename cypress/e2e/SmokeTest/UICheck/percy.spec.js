Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

/*
beforeEach(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
})
*/
    
describe('Visuals', () => {
  afterEach(() => {
    cy.get('.iubenda-cs-accept-btn').click()

  })

  it('Homepage compare', () => {
    cy.visit('https://www.unipro.io')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('homepage');
  })

  it('Insights page compare', () => {
    cy.visit('https://insight.unipro.io')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('insights page');
  })
/*
  it('Resources page compare', () => {
    cy.visit('https://insight.unipro.io/resources')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('resources page');
  })

  it('About page compare', () => {
    cy.visit('https://www.unipro.io/about')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('about page');
  })

  it('News page compare', () => {
    cy.visit('https://insight.unipro.io/news')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('news page');
  })

  it('Careers UK compare', () => {
    cy.visit('https://www.unipro.io/careers')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('careers page');
  }) 

  it('Careers Mauritius compare', () => {
    cy.visit('https://www.unipro.io/careers-mauritius')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('careers mauritius page');
  })

  it('Digital transformation page compare', () => {
    cy.visit('https://www.unipro.io/digital-transformation')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('digital transformation page');
  })

  it('Performance optimisation page compare', () => {
    cy.visit('https://www.unipro.io/performance-optimisation')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('performance optimisation page');
  })

  it('Application development page compare', () => {
    cy.visit('https://www.unipro.io/application-development')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('application development page');
  })

  it('Low Code page compare', () => {
    cy.visit('https://www.unipro.io/low-code')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('low code page');
  })

  it('Traditional coding page compare', () => {
    cy.visit('https://www.unipro.io/traditional-coding')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('traditional coding page');
  })

  it('Team augmentation page compare', () => {
    cy.visit('https://www.unipro.io/team-augmentation-and-training')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('team augmentation page');
  })

  it('How we work page compare', () => {
    cy.visit('https://www.unipro.io/how-we-work')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('how we work page');
  })

  it('Our work page compare', () => {
    cy.visit('https://www.unipro.io/our-work')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('our work page');
  })

  it('Contact page compare', () => {
    cy.visit('https://www.unipro.io/contact')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('contact page');
  })

  it('Services page compare', () => {
    cy.visit('https://www.unipro.io/services')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('services page');
  }) 

  it('Merger and acquisition for a global eCommerce brand page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/ecommerce-merger-and-acquisition')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Merger and acquisition for a global eCommerce brand');  
  }) 

  it('Energy company modernises core apps page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/field-service-applications-and-portals')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Energy company modernises core apps');
  })

  it('Working together on a modern, scalable platform page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/avantis')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Working together on a modern, scalable platform');
  })

  it('Why CRO & personalisation is pivotal page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/specsavers')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Why CRO & personalisation is pivotal');
  })

  it('CeX use personalisation to build visitor journeys page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/cex')
    cy.get('footer').scrollIntoView({ duration: 3000 })
    cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('CeX use personalisation to build visitor journeys');
  })

  it('Expediting digital transformation within pharmaceutical industry page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/pharmaceitical-asset-management')
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Expediting digital transformation within pharmaceutical industry');
  })

  it('Making data-informed decisions page compare', () => {
    cy.visit('https://www.unipro.io/case-studies/evans')
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Making data-informed decisions');
  })

  it('Thank you page compare', () => {
    cy.visit('https://www.unipro.io/thank-you-for-contacting-us')
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Thank you page');
  })

  it('Digital Consulting page compare', () => {
    cy.visit('https://www.unipro.io/consultancy-training')
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Digital Consulting page');
  })

  it('Security Policy statement page compare', () => {
    cy.visit('https://www.unipro.io/iso27001-security-policy-statement')
  cy.get('footer').scrollIntoView({ duration: 3000 })
  cy.wait(10000)
    // Take a snapshot for visual diffing
    cy.percySnapshot('Security Policy statement page');
  })
  */
})