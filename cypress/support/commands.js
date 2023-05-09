import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
    failureThreshold: 0.03, 
    failureThresholdType: 'percent', 
  });
  
  Cypress.Commands.add('hideHomeElements', () => {
    cy.get('iframe[role="presentation"]').then(($title) => {
      if ($title.length > 0) {
        $title.remove();
      }
    });
  
    cy.get(`img`).then(($picture) => {
      if ($picture.length > 0) {
        $picture.remove();
      }
    });
   
  });

  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    return originalFn(url, {
      ...options,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });
  });
  
  
