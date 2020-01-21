class LoginPage
{
    getLogo()
    {
        return cy.get('.logo')
    }
    getEmail()
    {
        return cy.get('#LoginForm_username')
    }
    getPassword()
    {
        return cy.get('#LoginForm_password')
    }
    getRememberMe()
    {
        return cy.get('#LoginForm_rememberMe')
    }
    getLogin()
    {
        return cy.get(':nth-child(8) > .bigBtn')
    }
}
export default LoginPage