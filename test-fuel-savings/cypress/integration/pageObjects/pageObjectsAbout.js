class pageObjectsAbout {

    aboutTxt(){
        return cy.get('h2')
    }

    reactStarterKitLink(){
        return cy.get('[href="https://github.com/coryhouse/react-slingshot"]')
    }

    page404Link(){
        return cy.get('[href="/badlink"]')
    }

}
export default pageObjectsAbout