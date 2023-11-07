const request = require('supertest');
const app = require('./app'); // Adjust the path to where your express app is exported

describe('POST /sum', () => {
  it('should calculate the sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ number1: 5, number2: 3 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sum', 8);
  });

  it('should return status code 400 if one or both inputs are not numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ number1: 'five', number2: 3 });

    expect(res.statusCode).toEqual(400);
  });

  it('should return status code 400 if one or both numbers are missing', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ number1: 5 });

    expect(res.statusCode).toEqual(400);
  });
});

describe('GET /', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('OK');
  });
});
