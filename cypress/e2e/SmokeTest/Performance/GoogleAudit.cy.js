Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Lighthouse', () => {
    it('Performance audits for Homepage', () => {
      cy.visit('https://www.unipro.io/');
      cy.lighthouse();
    });

    it('Performance audits for Insights page', () => {
        cy.visit('https://insight.unipro.io/');
        cy.lighthouse();
      });

      
      it('Performance audits for Resources page', () => {
        cy.visit('https://insight.unipro.io/resources');
        cy.lighthouse();
      });

      
      it('Performance audits for About page', () => {
        cy.visit('https://www.unipro.io/about');
        cy.lighthouse();
      });

      
      it('Performance audits for News page', () => {
        cy.visit('https://insight.unipro.io/news');
        cy.lighthouse();
      });
  


      it('Performance audits for Careers UK page', () => {
        cy.visit('https://www.unipro.io/careers');
        cy.lighthouse();
      });


      it('Performance audits for Careers Mauritius page', () => {
        cy.visit('https://www.unipro.io/careers-mauritius');
        cy.lighthouse();
      });



      it('Performance audits for Digital Transformation page', () => {
        cy.visit('https://www.unipro.io/digital-transformation');
        cy.lighthouse();
      });



      it('Performance audits for Performance optimisation page', () => {
        cy.visit('https://www.unipro.io/performance-optimisation');
        cy.lighthouse();
      });



      it('Performance audits for Application development page', () => {
        cy.visit('https://www.unipro.io/application-development');
        cy.lighthouse();
      });


      it('Performance audits for low code page', () => {
        cy.visit('https://www.unipro.io/low-code');
        cy.lighthouse();
      });



      it('Performance audits for traditional coding page', () => {
        cy.visit('https://www.unipro.io/traditional-coding');
        cy.lighthouse();
      });


      it('Performance audits for team augmentation page', () => {
        cy.visit('https://www.unipro.io/team-augmentation-and-training');
        cy.lighthouse();
      });


      it('Performance audits for how we work page', () => {
        cy.visit('https://www.unipro.io/how-we-work');
        cy.lighthouse();
      });


      it('Performance audits for our work page', () => {
        cy.visit('https://www.unipro.io/our-work');
        cy.lighthouse();
      });




      it('Performance audits for contact page', () => {
        cy.visit('https://www.unipro.io/contact/');
        cy.lighthouse();
      });


      it('Performance audits for services page', () => {
        cy.visit('https://www.unipro.io/services');
        cy.lighthouse();
      });



  });