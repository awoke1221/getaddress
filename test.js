
const getAddress = require('./getAddress')
const {assert} = require('chai')

const PRIVATE_KEY = "your private key"
const Expected_Address = "your address is hear"

describe('get address ', ()=>{
    it("should get the addresss from the private key", ()=>{
        const result = getAddress(PRIVATE_KEY)
        const address = result.address

        assert.equal(address.toLowerCase(), Expected_Address.toLowerCase());
    })
})