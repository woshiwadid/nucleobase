'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const sinon = require('sinon');

const app = require('../app.js');
const ejs = require('ejs');

describe('basic server', function() {
  it('sends back hello world', function(done) {
    request(app)
      .get('/api')
      .expect(200)
      .expect(function(res) {
        expect(res.text).to.equal('Hello World!');
      })
      .end(done);
  });

  it('accepts POST request', function(done) {
    request(app)
      .post('/api')
      .expect(201)
      .expect(function(res) {
        expect(res.body.data).to.equal('Posted!');
      })
      .end(done);
  });
});

describe('/dashboard', function() {

  it('GET request finds a page', function(done) {
    request(app)
      .get('/dashboard')
      .expect(302)
      .end(done);
  });

  xit('GET request responds with rendering index.ejs', function(done) {
    var spy = sinon.spy(ejs, '__express');
    request(app)
      .get('/dashboard')
      .expect(302)
      .end( (err, res) => {
        if (err) {
          return done(err);
        }
        expect(spy.calledWith(__dirname + '/views/index.ejs')).to.be.true;
        spy.restore();
        done();
      });
  });

});

describe('/login', function() {

  xit('GET request responds with OK', function(done) {
    request(app)
      .get('/login')
      .expect(200)
      .end(done);
  });

});
