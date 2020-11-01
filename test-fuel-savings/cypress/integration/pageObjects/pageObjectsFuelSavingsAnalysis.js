class pageObjectsFuelSavingsAnalysis {

    txtFuelSavingsAnalysis(){
        return cy.get('h2')
    }

    lblNewMpg(){
        return cy.get('[for="newMpg"]')
    }

   edtNewMpg(){
        return cy.get('[name="newMpg"]')
    } 

    lblTradeMpg(){
        return cy.get('[for="tradeMpg"]')
    }

    edtTradeMpg(){
        return cy.get('[name="tradeMpg"]')
    }

    lblNewPpg(){
        return cy.get('[for="newPpg"]')
    }

    edtNewPpg(){
        return cy.get('[name="newPpg"]')
    }

    lblTradePpg(){
        return cy.get('[for="tradePpg"]')
    }

    edtTradePpg(){
        return cy.get('[name="tradePpg"]')
    }

    lblMilesDriven(){
        return cy.get('[for="milesDriven"]')
    }

    edtMilesDriven(){
        return cy.get('[name="milesDriven"]')
    }

    cbxMilesDrivenTimeframe(){
        return cy.get('[name="milesDrivenTimeframe"]')
    }

    lblDataModified(){
        return cy.get('label')
    }

    lblSavings(){
        return cy.get('[class="fuel-savings-label"]')
    }

    tblDates(){
        return cy.get('tr')
    }

    lblReturnSavings(){
        return cy.get('[class="savings"]')
    }

    btnSave(){
        return cy.get('[type="submit"]')
    }
}
export default pageObjectsFuelSavingsAnalysis