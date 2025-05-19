import express from 'express';
import cors from 'cors';
import routes from './routes/apiRoutes.js';
const app = express();

// Enable CORS for everything
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

export default app;