/// <reference types="Cypress" />


describe('API Automation using Cypress', () => {

    it('Get Users', () => {
        
        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users/',
            headers:{
                Authorization:`Bearer ${Cypress.env('GOREST_TOKEN')}`
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })


    })

    it('Get Users1', () => {

        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users/4432336',
            headers:{
                Authorization:`Bearer ${Cypress.env('GOREST_TOKEN')}`
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(4432336)
        })


    })

    it('Get User - invalid Endpoint', () => {

        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/user',
            headers:{
                Authorization:`Bearer ${Cypress.env('GOREST_TOKEN')}`
            },

            failOnStatusCode : false
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
        })
    })

    it('Get User - invalid user', () => {

        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users/46757336',
            headers:{
                Authorization:`Bearer ${Cypress.env('GOREST_TOKEN')}`
            },
            failOnStatusCode : false,
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)

        })


    })
})