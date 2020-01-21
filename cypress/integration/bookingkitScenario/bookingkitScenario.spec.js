/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/LoginPage'
import DashboardPage from '../../support/pageObjects/DashboardPage'
import ProfilePage from '../../support/pageObjects/ProfilePage'

    //
    describe('As a user, I would like to update lanaguage preference on my profle', () => {
        beforeEach(function() {
            cy.viewport(1280, 664)
            cy.visit(Cypress.env('baseUrl'))
            // runs once before all tests in the block
            cy.fixture('user').as("bookingkitUser").then(function(user)
            {
                this.user=user
            })
        })

        /* Please NOTE that this is a very simple E2E test case; The idea was to showcast
        fundamental concepts withouth any further refactoring and page/test brakedowns. In reality, this test should be broken
        down into multiple tests adreessing specific needs and ideas of the application domain objects.
        
        Explanations:
        The main reason behind {force = true} is to force the action to 
        be performed on the element regardless of whether the element is visible or not */

        it('Verify that a user can update lanague preference',function() {
        
            const loginPage=new LoginPage()
            const dashboardPage=new DashboardPage()
            const profilePage=new ProfilePage()

            loginPage.getLogo().should('be.visible')
            loginPage.getEmail().type(this.user.email,  { delay: 100 })
                                .should('have.value', 'dantis+test@bookingkit.de')
            loginPage.getPassword().type(this.user.password,  { delay: 100 })
                                .should('have.value', 'welcome@2018')                
            loginPage.getLogin().click({ multiple: true })
            cy.title().should('contain', 'Dashboard - bookingkit');
            dashboardPage.getUserMenu().click({ force: true })
            dashboardPage.getUserProfileListOfOption().first().click({ force: true })
            profilePage.getList().eq(1).click({ force: true })
            cy.url().should('contain', '/user');
            profilePage.getLanguageEnglish().check().should('be.checked')
            profilePage.getSubmitButton().click()
            cy.clock(3000)
            profilePage.getUpdatedProfileLanguageNotificationMessage().should('be.visible')
            profilePage.getDashboard().click()
            cy.url().should('contain', '/site/index');
            profilePage.getList().eq(1).click({ force: true })
            profilePage.getLanguageGerman().check().should('be.checked')
            profilePage.getSubmitButton().click()
            cy.clock(3000)
            profilePage.getUpdatedProfileLanguageNotificationMessage().should('be.visible')
            profilePage.getDashboard().click()
            dashboardPage.getList().eq(2).click({ force: true })
            cy.url().should('contain', '/login')
        })       
})