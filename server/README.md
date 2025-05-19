
## Start & Develop

- **Start server:**  
  ```sh
  npm start
  ```
- **Dev mode (auto-reload):**  
  ```sh
  npm run dev
  ```

## Testing with Jest

- **Run all tests:**  
  ```sh
  npm test
  ```

### Example Jest Test (with Supertest)
```javascript
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
```

## Node.js Helpers

- **Log to console:**  
  ```js
  console.log('Debug info:', variable);
  ```
- **Read environment variable:**  
  ```js
  const port = process.env.PORT || 5000;
  ```
- **Send JSON response:**  
  ```js
  res.json({ message: 'Hello, world!' });
  ```
- **Send status code:**  
  ```js
  res.status(404).send('Not found');
  ```

---

**Tip:**  
- Use `import`/`export` syntax (ESM) everywhere.
- All local imports must include `.js` extension.
