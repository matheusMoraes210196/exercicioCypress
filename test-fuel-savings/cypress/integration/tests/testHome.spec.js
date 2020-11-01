/// <reference types="cypress" />
import PageObjectsTopMenu from '../pageObjects/pageObjectsTopMenu'
import PageObjectsAbout from '../pageObjects/pageObjectsAbout'
import PageObjectsTopFuelSavingsAnalysis from '../pageObjects/pageObjectsFuelSavingsAnalysis'

const topMenu = new PageObjectsTopMenu();

describe('Tela - Home', () => {
    describe('CN001 -  Validar Layout tela React Slingshot', () => {

        it('Dado que eu esteja na tela React Slingshot', () => {
            cy.visit('http://localhost:3000/')    
        });

        it('Então valido o layout', () => {
            topMenu.homeTopMenu().should('exist').should('contain', 'Home')
            topMenu.demoAppTopMenu().should('exist').should('contain', 'Demo App')
            topMenu.aboutTopMenu().should('exist').should('contain', 'About')
            
            cy.get('h1').should('exist').should('contain', 'React Slingshot')
            cy.get('h2').should('exist').should('contain', 'Get Started')
            cy.get('li').should('exist').should('contain', 'Review the demo app')
                .should('contain', 'Remove the demo and start coding: npm run remove-demo')
        });
    });
});