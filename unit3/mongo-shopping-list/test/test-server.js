var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

global.environment = 'test';
var server = require('../server.js');
var Item = require('../models/item');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Shopping List', function() {
    before(function(done) {
        server.runServer(function() {
            Item.create({name: 'Broad beans'},
                        {name: 'Tomatoes'},
                        {name: 'Peppers'}, function() {
                done();
            });
        });
    });

    after(function(done) {
        Item.remove(function() {
            done();
        });
    });
});

    it('should list items on get', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.should.have.length(3);
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('name');
                res.body[0].id.should.be.a('number');
                res.body[0].name.should.be.a('string');
                res.body[0].name.should.equal('Broad beans');
                res.body[1].name.should.equal('Tomatoes');
                res.body[2].name.should.equal('Peppers');
                done();
            });
    });
    it('should add an item on post', function(done) {
        chai.request(app)
            .post('/items')
            .send( {name: 'Pizza'} )
            .end(function(err, res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.an('object');
                res.body.should.have.property('name');
                res.body.should.have.property('id');
                res.body.id.should.be.a('number');
                res.body.name.should.be.a('string');
                res.body.id.should.equal(3);
                res.body.name.should.equal('Pizza');
                done();
            });
    });
    it('should edit an item on put', function(done) {
        chai.request(app)
            .put('/items/0')
            .send( { name: 'Apples', id: 0 } )
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('object');
                res.body.should.have.property('name');
                res.body.should.have.property('id');
                res.body.id.should.be.a('number');
                res.body.name.should.be.a('string');
                res.body.id.should.equal(0);
                res.body.name.should.equal('Apples');
                // replace these with checks on the database?
                //items.items[0].id.should.equal(0);
                //items.items[0].name.should.equal('Apples');
                done();
            });
    });
    it('should delete an item on delete', function(done) {
        chai.request(app)
            .delete('/items/1')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('object');
                res.body.should.have.property('name');
                res.body.should.have.property('id');
                res.body.id.should.be.a('number');
                res.body.name.should.be.a('string');
                res.body.id.should.equal(1);
                res.body.name.should.equal('Tomatoes');
                // replace these with checks on the database?
                //items.items.length.should.equal(3);
                //items.items[0].id.should.equal(1);
                done();
            });
    });
    
    //TODO: it('should alert the user when an item was updated that did not exist already');

    after(function(done) {
        Item.resetCount(function(err, nextCount) {
            console.log('Autoincrement was reset to', nextCount);
            Item.remove(function() {
                done();
            });
        });
    });


app.listen(process.env.PORT || 8080, process.env.IP);