/// <reference types="cypress" />
import PageObjectsTopMenu from '../pageObjects/pageObjectsTopMenu'
import PageObjectsAbout from '../pageObjects/pageObjectsAbout'
import PageObjectsTopFuelSavingsAnalysis from '../pageObjects/pageObjectsFuelSavingsAnalysis'

const topMenu = new PageObjectsTopMenu();
const pageAbout = new PageObjectsAbout();

describe('Tela - About', () => {
    describe('CN001 - Validar Layout tela About', () => {

        it('Dado que eu esteja na tela About', () => {
            cy.visit('http://localhost:3000/about')    
        });

        it('Então valido o layout', () => {
            topMenu.homeTopMenu().should('exist').should('contain', 'Home')
            topMenu.demoAppTopMenu().should('exist').should('contain', 'Demo App')
            topMenu.aboutTopMenu().should('exist').should('contain', 'About')
        
            pageAbout.aboutTxt().should('exist').should('contain', 'About')
            pageAbout.reactStarterKitLink().should('exist').should('contain', 'React-Slingshot starter kit')
            pageAbout.page404Link().should('exist').should('contain', 'Click this bad link')
        });
    });
});