const express = require('express');
const sequelize = require('./config/database');
const app = express();
const port = 3000;
const athleteRoutes = require('./routes/athleteRouter')

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
})

app.use(express.json());

//Manejo de rutas
app.use('/api', athleteRoutes);

sequelize.sync()
    .then(()=> console.log('Base de Datos Sincronizada'))
    .catch(err => console.error('Error al sincronizar la base de datos', err));