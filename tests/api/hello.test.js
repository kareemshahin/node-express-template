const express = require('express');
const request = require('supertest');

const helloRouter = require('../../src/routes/hello');

const app = express();
app.use('/hello', helloRouter);

describe('GET /hello', () => {
  it('responds with hello', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'hello' });
  });
});
