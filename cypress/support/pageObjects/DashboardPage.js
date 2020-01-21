class DashboardPage
{
    getUserMenu()
    {
        return cy.get('.user-name')
    }
    getUserProfileListOfOption()
    {
        return cy.get('.usrDropdwonHolder')
    } 
    getList()
    {
        return cy.get('li a')
    }
}
export default DashboardPage