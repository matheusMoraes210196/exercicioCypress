/// <reference types="cypress" />
import PageObjectsTopMenu from '../pageObjects/pageObjectsTopMenu'
import PageObjectsAbout from '../pageObjects/pageObjectsAbout'
import PageObjectsTopFuelSavingsAnalysis from '../pageObjects/pageObjectsFuelSavingsAnalysis'

const topMenu = new PageObjectsTopMenu();
const pageAbout = new PageObjectsAbout();
const pageFuelSavings = new PageObjectsTopFuelSavingsAnalysis();

describe('Tela - Fuel Savings Analysis', () => {
    describe('CN001 - Validar Layout tela Fuel Savings Analysis', () => {

        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Então valido o layout', () => {
            topMenu.homeTopMenu().should('exist').should('contain', 'Home')
            topMenu.demoAppTopMenu().should('exist').should('contain', 'Demo App')
            topMenu.aboutTopMenu().should('exist').should('contain', 'About')
        
            pageFuelSavings.txtFuelSavingsAnalysis().should('exist').should('contain', 'Fuel Savings Analysis')
            
            pageFuelSavings.lblNewMpg().should('exist').should('contain', 'New Vehicle MPG')
            pageFuelSavings.edtNewMpg().should('exist')
            pageFuelSavings.lblTradeMpg().should('exist').should('contain', 'Trade-in MPG')
            pageFuelSavings.edtTradeMpg().should('exist')
            pageFuelSavings.lblNewPpg().should('exist').should('contain', 'New Vehicle price per gallon')
            pageFuelSavings.edtNewPpg().should('exist')
            pageFuelSavings.lblTradePpg().should('exist').should('contain', 'Trade-in price per gallon')
            pageFuelSavings.edtTradePpg().should('exist')
            pageFuelSavings.edtMilesDriven().should('exist')
            pageFuelSavings.cbxMilesDrivenTimeframe().should('exist').should('contain', 'Week').should('contain', 'Month').should('contain', 'Year')
            pageFuelSavings.lblDataModified().should('exist').should('contain', 'Date Modified')

        });
    });

    describe('CN002 - Validar retorno positivo para cálculo de consumo por semana', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('week')
            pageFuelSavings.btnSave().click

        });

        it('Então o retorno do cálculo no campo "Savings" deve ser positivo com os valores', () => {
            
            pageFuelSavings.lblSavings().should('exist').should('contain', 'Savings')
            pageFuelSavings.lblReturnSavings().should('exist').should('contain', '$50.56')
                                                            .should('contain', '$606.72')
                                                            .should('contain', '$1,820.16')

        });
    });

    describe('CN003 - Validar retorno positivo para cálculo de consumo por mês', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('month')
            pageFuelSavings.btnSave().click

        });

        it('Então o retorno do cálculo no campo "Savings" deve ser positivo com os valores', () => {
            
            pageFuelSavings.lblSavings().should('exist').should('contain', 'Savings')
            pageFuelSavings.lblReturnSavings().should('exist').should('contain', '$11.67')
                                                            .should('contain', '$140.04')
                                                            .should('contain', '$420.12')

        });
    });

    describe('CN004 - Validar retorno positivo para cálculo de consumo por ano', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('year')
            pageFuelSavings.btnSave().click

        });

        it('Então o retorno do cálculo no campo "Savings" deve ser positivo com os valores', () => {
            
            pageFuelSavings.lblSavings().should('exist').should('contain', 'Savings')
            pageFuelSavings.lblReturnSavings().should('exist').should('contain', '$0.97')
                                                            .should('contain', '$11.64')
                                                            .should('contain', '$34.92')

        });
    });

    describe('CN005 - Validar que não houve retorno para cálculo de consumo com valor negativo no campo "New Vehicle MPG"', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(-15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('month')
            pageFuelSavings.btnSave().click

        });

        it('Então o campo "Savings" não deve ser exibido', () => {
            
            pageFuelSavings.lblSavings().should('not.exist')
            pageFuelSavings.lblReturnSavings().should('not.exist')

        });
    });

    describe('CN006 - Validar que não houve retorno para cálculo de consumo com valor negativo no campo "Trade-in MPG"', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(-12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('month')
            pageFuelSavings.btnSave().click

        });

        it('Então o campo "Savings" não deve ser exibido', () => {
            
            pageFuelSavings.lblSavings().should('not.exist')
            pageFuelSavings.lblReturnSavings().should('not.exist')

        });
    });

    describe('CN007 - Validar que não houve retorno para cálculo de consumo com valor negativo no campo "New Vehicle price per gallon"', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(-3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('month')
            pageFuelSavings.btnSave().click

        });

        it('Então o campo "Savings" não deve ser exibido', () => {
            
            pageFuelSavings.lblSavings().should('not.exist')
            pageFuelSavings.lblReturnSavings().should('not.exist')

        });
    });

    describe('CN008 - Validar que não houve retorno para cálculo de consumo com valor negativo no campo "Trade-in price per gallon"', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(-3.5)
            pageFuelSavings.edtMilesDriven().type(200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('month')
            pageFuelSavings.btnSave().click

        });

        it('Então o campo "Savings" não deve ser exibido', () => {
            
            pageFuelSavings.lblSavings().should('not.exist')
            pageFuelSavings.lblReturnSavings().should('not.exist')

        });
    });

    describe('CN009 - Validar que não houve retorno para cálculo de consumo com valor negativo no campo "Miles Driven"', () => {
        
        it('Dado que eu esteja na tela Fuel Savings Analysis', () => {
            cy.visit('http://localhost:3000/fuel-savings')    
        });

        it('Quando eu preencher os campos com', () => {
            
            pageFuelSavings.edtNewMpg().type(15)
            pageFuelSavings.edtTradeMpg().type(12)
            pageFuelSavings.edtNewPpg().type(3.5)
            pageFuelSavings.edtTradePpg().type(3.5)
            pageFuelSavings.edtMilesDriven().type(-200)
            pageFuelSavings.cbxMilesDrivenTimeframe().select('month')
            pageFuelSavings.btnSave().click

        });

        it('Então o campo "Savings" não deve ser exibido', () => {
            
            pageFuelSavings.lblSavings().should('not.exist')
            pageFuelSavings.lblReturnSavings().should('not.exist')

        });
    });
});