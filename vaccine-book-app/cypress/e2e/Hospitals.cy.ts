describe('User Interaction', () => {
  it('Should navigate and interact with elements', () => {
    // Start at the home page
    cy.visit('/');

    // Check if there is a video displayed on the home page
    cy.get('video').should('exist');

    // Check if the video is in the play state (paused should be false)
    cy.get('video').should('have.prop', 'paused', false);

    // Wait for 5 seconds
    cy.wait(5000);

    // Pause the video
    cy.get('button.pause-button').click();

    // Check if the video is in the pause state (paused should be true)
    cy.get('video').should('have.prop', 'paused', true);

    // Click the banner button to navigate to /hospital
    cy.get('.banner-button').click();

    // Check if the URL is /hospital
    cy.url().should('include', '/hospital');

    // Check if there are at least 3 images on the /hospital page
    cy.get('img').should('have.length.at.least', 3);
  });
});
