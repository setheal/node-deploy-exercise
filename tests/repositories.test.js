/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

// Describe for all HTTP verbs
describe("Repositories", function() {

  // Describe for GET verbs
  describe("GET /repositories", function() {

    // Test si nous récupérons bien les répositories
    it("Should get all repositories", function(done) {
      chai.request(app).get('/repositories').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });

    // Test si nous récupérons bien un répository
    it("Should get a repository", function(done) {
      const id = 1;
      chai.request(app).get(`/repositories/${id}`).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });

    // Test si nous ne récupérons aucun rrépository
    it("Should not get a repository", function(done) {
      const id = -1;
      // Passons un id non existant dans la DB pour vérifier
      chai.request(app).get(`/repositories/${id}`).end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});