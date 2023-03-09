Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

//front end performane test 
/*it('load Home page', () => {
    cy.visit('https://www.unipro.io/')
    cy.window()
    .its('performance')
    .invoke('measure', 'modalOpen')
    .its('duration', { timeout: 0 }) //set timeout to 0
    .should('be.lessThan', 5000) //load longer than 5 seconds
})*/


it('ecommerce merger and acquisition', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/ecommerce-merger-and-acquisition', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        // this is now a queued command which will only run after the previous command
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('field service applications and portals', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/field-service-applications-and-portals', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        // this is now a queued command which will only run after the previous command
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('avantis', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/avantis', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('specsavers', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/specsavers', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('cex', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/cex', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('pharmaceitical asset management', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/pharmaceitical-asset-management', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('evans', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/case-studies/evans', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('careers uk', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/careers', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('careers mu', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/careers-mauritius', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('performance optimisation', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/performance-optimisation', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('home page', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        // this is now a queued command which will only run after the previous command
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('rapid application development', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/813885146e2bee99d77bbd0578ceb546', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('our work', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/our-work', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('thank you for contacting us', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/thank-you-for-contacting-us', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('consultancy-training', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/consultancy-training', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('about', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/about', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('how we work ', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/how-we-work', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('application development ', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/application-development', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('team augmentation and training', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/team-augmentation-and-training', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('traditional coding', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/traditional-coding', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('low code', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/low-code', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('digital transformation', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/digital-transformation', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('services', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/services', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('security policy', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/iso27001-security-policy-statement', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('modern slavery and human trafficking policy', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/modern-slavery-and-human-trafficking-policy', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('terms for a free of charge poc', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/terms-for-a-free-of-charge-poc', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('low code proof of concept', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/win-a-low-code-proof-of-concept', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('webtrends optimize', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/partners/webtrends-optimize', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('outsystem', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/partners/outsystems', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('qubit', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/partners/qubit', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('contentsquare', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/partners/contentsquare', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('contact low code', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/contact-low-code/', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})

it('contact us', () => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/contact/', { timeout: 40000 });
    cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        expect(t1 - t0).to.be.lessThan(3);
    })
})