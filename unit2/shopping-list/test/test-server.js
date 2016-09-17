
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();  //tell chai to use chai-http 
//Calling chai.should extends every object with a should property (like each) you can then use for chaining an assertion.
var app = server.app;   //apply chai-http module to server.js
var storage = server.storage;   //then via server.js apply chait-http to storage(db)

chai.use(chaiHttp);


describe('Shopping List', function() {
    it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

 it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.should.have.length(3);
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('name');
                res.body[0].id.should.be.a('number');
                res.body[0].name.should.be.a('string');
                
                done();
            });
    });


app.listen(process.env.PORT || 8080, process.env.IP);



