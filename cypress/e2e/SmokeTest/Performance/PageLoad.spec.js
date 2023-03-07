Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

//https://www.unipro.io/
it('load Home page',() => {
    const t0 = performance.now()
    cy.visit('https://www.unipro.io/', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
})
})

//https://insight.unipro.io/
it('load Insights page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://insight.unipro.io/', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://insight.unipro.io/resources
it('load Insights resource page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://insight.unipro.io/resources', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/about
it('load about page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/about', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://insight.unipro.io/news
it('load news page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://insight.unipro.io/news', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/careers
it('load careers uk page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/careers', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/careers-mauritius
it('load careers mau page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/careers-mauritius', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/digital-transformation
it('load digital transformation page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/digital-transformation', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})


//https://www.unipro.io/performance-optimisation
it('load performance optimisation page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/performance-optimisation', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/application-development
it('load application development page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/application-development', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/low-code
it('load low code page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/low-code', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/traditional-coding
it('load traditional coding page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/traditional-coding', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/team-augmentation-and-training
it('load team augmentation page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/team-augmentation-and-training', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/how-we-work
it('load how we work page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/how-we-work', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/our-work
it('load our work page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/our-work', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/contact/
it('load contact page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/contact/', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})

//https://www.unipro.io/services
it('load services page',() => {
    const t0 = performance.now()
    cy.viewport(1920, 1080)
    cy.visit('https://www.unipro.io/services', {timeout: 40000});
    cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
        // only run after the previous command
cy.log(`Page load took ${t1 - t0} milliseconds.`);
expect(t1 - t0).to.be.lessThan(3);
})
})