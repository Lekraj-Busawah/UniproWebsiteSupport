
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
         
        
        it('Homepage compare', () => {
            cy.visit('https://www.unipro.io')
            cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('homepage');
      
          })
      
          
      
          it('Insights page compare', () => {
            cy.visit('https://insight.unipro.io')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('insights page');
          })
      
      
          it('Resources page compare', () => {
            cy.visit('https://insight.unipro.io/resources')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('resources page');
          })
      
      
          it('About page compare', () => {
            cy.visit('https://www.unipro.io/about')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('about');
          })
      
      
          it('News page compare', () => {
            cy.visit('https://insight.unipro.io/news')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('news page');
          })
      
      
          it('Careers UK compare', () => {
            cy.visit('https://www.unipro.io/careers')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('careers page');
          })
      
      
          it('Careers Mauritius compare', () => {
            cy.visit('https://www.unipro.io/careers-mauritius')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('careers mauritius page');
          })
      
      
          it('Digital transformation page compare', () => {
            cy.visit('https://www.unipro.io/digital-transformation')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('digital transformation page');
          })
      
      
          it('Performance optimisation page compare', () => {
            cy.visit('https://www.unipro.io/performance-optimisation')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('performance optimisation page');
          })

      
          it('Application development page compare', () => {
            cy.visit('https://www.unipro.io/application-development')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('application development page');
          })
      
      
          it('Low Code page compare', () => {
            cy.visit('https://www.unipro.io/low-code')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('low code page');
          })
      
      
          it('Traditional coding page compare', () => {
            cy.visit('https://www.unipro.io/traditional-coding')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('traditional coding page');
          })
      
      
          it('Team augmentation page compare', () => {
            cy.visit('https://www.unipro.io/team-augmentation-and-training')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('team augmentation page');
          })
      
      
          it('How we work page compare', () => {
            cy.visit('https://www.unipro.io/how-we-work')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('how we work page');
          })
      
      
          it('Our work page compare', () => {
            cy.visit('https://www.unipro.io/our-work')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('our work page');
          })
      
      
          it('Contact page compare', () => {
            cy.visit('https://www.unipro.io/contact')
            //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
            cy.get('footer').scrollIntoView({ duration: 3000 })
            cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('contact page');
          })
      
      
          it('Services page compare', () => {
            cy.visit('https://www.unipro.io/services')
           //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
           cy.get('footer').scrollIntoView({ duration: 3000 })
           cy.wait(10000)
            // Take a snapshot for visual diffing
            cy.percySnapshot('services page');

          })
      
      
      
      
        })

