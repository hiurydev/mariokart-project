const express = require('express');
const cors = require('cors');
const raceRoutes = require('./src/routes/raceRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api', raceRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
