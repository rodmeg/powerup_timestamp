import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para que Trello pueda conectarse
app.use(cors());
app.use(express.json());

// Ruta que recibe los eventos desde el Power-Up
app.post('/evento', (req, res) => {
  const evento = req.body;
  console.log('📩 Evento recibido:', evento);
  res.status(200).json({ mensaje: 'Evento guardado (aún no en base de datos)' });
});

// Probar si el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor de Trello Power-Up funcionando 🎉');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
