import express from 'express';  
const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

router.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

export default router;
