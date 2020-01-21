class DashboardPage
{
    getLanguageEnglish()
    {
        return cy.get('.box_languages > :nth-child(4) > input')
    }
    getLanguageGerman()
    {
        return cy.get('.box_languages > :nth-child(3) > input')
    }
    getSubmitButton()
    {
        return cy.get('[type="submit"]')
    }
    getDashboard()
    {
        return cy.get('.dashboard-btn.menuBtn ')
    }
    getUpdatedProfileLanguageNotificationMessage()
    {
        return cy.get('.flash-message')
    }
    getList()
    {
        return cy.get('li a')
    }
}
export default DashboardPage