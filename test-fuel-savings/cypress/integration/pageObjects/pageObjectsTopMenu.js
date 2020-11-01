class pageObjectsTopMenu {
    
    homeTopMenu(){
        return cy.get('[href="/"]')
    }

    demoAppTopMenu(){
        return cy.get('[href="/fuel-savings"]')
    }

    aboutTopMenu(){
        return cy.get('[href="/about"]')
    }

    reactSlingshotTxt(){
        return 
    }

    getStartedTxt(){
        return 
    }

    listaInstrucoes(){
        return 
    }
}
export default pageObjectsTopMenu