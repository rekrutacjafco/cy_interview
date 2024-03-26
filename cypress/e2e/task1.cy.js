// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

/// <reference types="cypress" />

describe('Interview task for homepage and checks if it is article page type', () => {
  it('Visits homepage, opens first article', () => {
      //Make sure You're using specific 1536x960 viewport

      // Opens the page
 

      // Checks if the page title is properly set

      cy.wait(2000)
      // Clicks on the 10th article

      // Checks article url if it matches href

      // Checks dataLayer variable "page type" to match article
  })

  it('Goes back from article page to homepage and takes screenshot', () => {
      //Make sure You're using specific 1536x960 viewport

      // Opens any article page

      cy.wait(2000)

      //Goes back to homepage by internal page navigation

      //Checks if we are on a target page
  })
})