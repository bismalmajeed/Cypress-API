/// <reference types="Cypress" />


describe('API Automation using Cypress', () => {

    it('Get Users', () => {
        
        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users/',
            Headers:{
                Authorization:"Bearer e343a664464d1c2d5e5a0f3091afde6b480db100873e688e5538b1249a550d83"
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
            Headers:{
                Authorization:"Bearer e343a664464d1c2d5e5a0f3091afde6b480db100873e688e5538b1249a550d83"
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
            Headers:{
                Authorization:"Bearer e343a664464d1c2d5e5a0f3091afde6b480db100873e688e5538b1249a550d83"
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
            Headers:{
                Authorization:"Bearer e343a664464d1c2d5e5a0f3091afde6b480db100873e688e5538b1249a550d83"
            },
            failOnStatusCode : false,
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
     
        })
        

    })
})