import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('should return server running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Server is up and running!');
  });
});

describe('GET /api/health', () => {
    it('should return server health message', async () => {
      const res = await request(app).get('/api/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('OK');
      expect(res.body.message).toBe('Server is running!');
    });
});