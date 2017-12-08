const request = require('supertest')
const app = require('../server.js')
const User = require('../models/User')
const Product = require('../models/Product')

const chai = require('chai')
const should = chai.should()

const email = 'test@test.com'

let token

describe('Test products CRUD', () => {
    before((done) => {
        request(app)
            .post('/auth/register')
            .send({
                firstName: 'Test',
                lastName: 'User',
                email: email,
                password: 'test1234',
                role: 'user'
            })
            .then((response) => {
                token = response.body.token
                done()
            })
    })

    it ('Should be able to create a product if user has valid Bearer Token', (done) => {
        request(app)
            .post('/products/new')
            .set('Authorization', `Bearer ${token}`)
            .send({
                brandName: 'Apple',
                name: 'MacMini'
            })
            .expect(200)
            .then((response) => {
                // Make sure the response is an array!
                response.body.should.be.an('object')
                done()
            })
    })

    after(() => {
        User.remove({ email: 'test@test.com' })
            .then(() => {
                console.log('Cleaned up test user!')
            })
        Product.remove({name: 'MacMini'})
        .then(() => {
            console.log('Cleaned up test product')
        })
    })
})