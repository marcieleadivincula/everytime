const chai = require("chai");
const expect = chai.expect;
const getWorkHours = require("../src/")

describe('Carga horário cumprida sem banco de horas', () => {
    it('CheckOut - CheckIn deve retornar 0', () => {
        expect(getWorkHours(workLoad, checkIn, checkOut)).to.equal(true)
    });
})
