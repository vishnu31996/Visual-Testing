Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });
  

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific error messages
    if (err.message.includes('Cannot read properties of undefined (reading \'offsetWidth\')')) {
      return false;
    }
  
    // Throw other error messages to fail the test
    throw err;
  });
  